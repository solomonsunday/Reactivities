import React from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo';
import CarItem from './CarItem';

const App: React.FC = () => {
  return (
    <div className="App">
      <ul>
        {cars.map((car) => (
          <CarItem car={car} />
          // <li>{car.color}</li>
          // <li>{car.model}</li>
          // <li>{car.topSpread}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
