import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import SplashNavBar from './components/SplashNavBar';
import BizNavBar from './components/BizNavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import BottomNav from './components/BottomNav';
import TopRedNav from './components/TopRedNav';
import Splash from './components/Splash';
import Business from './components/Business';
import CreateForm from './components/CreateForm.js';
import ReviewForm from './components/ReviewForm.js';
import EditForm from './components/EditBusiness';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <TopRedNav />
          <LoginForm />
          <BottomNav />
        </Route>
        <Route path='/sign-up' exact={true}>
          <TopRedNav />
          <SignUpForm />
          <BottomNav />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path="/biz/:bizId" exact={true}>
          <BizNavBar />
          <Business />
          <BottomNav />
        </Route>
        <Route path='/' exact={true} >
          <SplashNavBar />
          <Splash />
          <BottomNav />
        </Route>
        <Route path='/signup_biz/new' exact={true}>
          <TopRedNav />
          <CreateForm />
          <BottomNav />
        </Route>
        <Route path='/biz/:bizId/writeareview' exact={true}>
          <TopRedNav />
          <ReviewForm />
        </Route>
        <Route path='/biz/:businessId/edit' exact={true}>
          <TopRedNav />
          <EditForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
