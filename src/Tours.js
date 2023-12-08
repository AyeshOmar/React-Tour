import React, { useState } from 'react';
import TourList from './TourList';

const Tours = ({ tour, fetchData }) => {
  const [newTour, setNewTour] = useState(tour);

  const deleteTour = (id) => {
    const updatedTour = newTour.filter((toury) => toury.id !== id);
    setNewTour(updatedTour);
  };




  
  if (newTour.length === 0) {
    return (
      <div className='NoTourDiv'>
        <h1>No Tours Left</h1>
        <button className='btn'>Refresh</button>
      </div>
    );
  }

  return (
    <section className='container'>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div className='toury'>
        {newTour.map((toury) => (
          <TourList key={toury.id} toury={toury} deleteTour={deleteTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
