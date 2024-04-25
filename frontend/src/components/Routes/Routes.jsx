import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../HomePage/HomePage';
import { Component } from 'react';

export const AuthRoute = ({ component: Component, ...props }) => {
  const loggedIn = useSelector(state => !!state.session.user);

  return (
    !loggedIn ?
      <Component {...props} /> :
      <Navigate to="/" replace={true} />
  );
};

export const ProtectedRoute = ({ component: Component, ...props }) => {
  const loggedIn = useSelector(state => !!state.session.user);

  return (
    loggedIn ? 
      <Component {...props} /> :
      <Navigate to="/" replace={true} />
  );
};