import Login from './pages/login/Login';
import './App.scss';
import {
  Route, Routes, BrowserRouter
} from 'react-router-dom';


// import { ConnectedRouter as Router } from 'connected-react-router';
import React, { useEffect, Fragment } from 'react';
import AdminPage from './pages/admin/AdminPage';
import SignUp from './pages/signup/SignUp';
import UserAdd from './pages/admin/UserAdd';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./redux/homeSlice";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };
  return (
    <Fragment>
      <BrowserRouter>
        {location.pathname !== '/login' && location.pathname !== '/signup'  && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homeAdmin" element={<AdminPage />} />
          <Route path="/homeAdmin/users/add" element={<UserAdd />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/homeAdmin/*' && <Footer />}

      </BrowserRouter>
    </Fragment>
  )


}


export default App;
