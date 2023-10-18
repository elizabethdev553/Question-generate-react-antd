import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/layout/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
// import ProfileForm from './components/profile-forms/ProfileForm';

// import Profile from './components/profile/Profile';
import SearchComponent from "./components/SearchComponent";
import GenerateQuestion from "./components/GenerateQuestion";
import Profile from "./components/Profile";
import UserSetting from "./components/UserSetting";
import CategoryDetail from "./components/category/CategoryDetail";
import AddQuestion from "./components/AddQuestion";
import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';
import { LOGOUT } from './actions/types';

import 'bootstrap/dist/css/bootstrap.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/generate-question" element={<GenerateQuestion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<UserSetting />} />
          <Route path="/category-detail" element={<CategoryDetail />} />
          <Route path="/add-question" element={<AddQuestion />} />

          {/* <Route
            path="category-detail"
            element={
              <PrivateRoute
                component={<PrivateRoute component={Search} />}
              />
            }
          /> */}

          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
