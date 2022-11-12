import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home'
import Signin from '../pages/signin'
import Signup from '../pages/signup'
import useAuth from "../hooks/userAuth";

const Private = ({ Item }) => {
  const signed = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route exact path="/home" element={<Private Item={Home} />} />
        <Route path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;