import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from '../detailspage/Details';
import Nav from './Nav';
import CITYS from './CITYS';

const Home = () => {
  const city = useSelector((state) => state.homeReducer);
  return (
    <div className="container-home">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<CITYS />} />
          <Route path="/details" element={<Details city={city} />} />
        </Routes>
      </Router>
    </div>

  );
};
export default Home;
