import Login from './components/Login';
import './App.scss';
import {
  Route, Routes, BrowserRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

// import { ConnectedRouter as Router } from 'connected-react-router';
import { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    // started: state.app.started,
    // isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
