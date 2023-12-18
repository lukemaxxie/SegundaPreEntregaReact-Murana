import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>
        <Link to="/pachamama-eventos">Pachamama Eventos</Link>
      </h1>
      <p>Bienvenidos a Pachamama!</p>
    </div>
  );
};

export default Home;
