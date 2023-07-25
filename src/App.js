import Login from './pages/Login';
import './App.scss';
import {
  Route, Routes, BrowserRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

// import { ConnectedRouter as Router } from 'connected-react-router';
import React, { Component, Fragment } from 'react';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
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
