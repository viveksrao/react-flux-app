import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import ManageCoursePage from './ManageCoursePage';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <React.Fragment>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-us" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  )
}

export default App;