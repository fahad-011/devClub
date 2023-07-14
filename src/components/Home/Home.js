import React from 'react';
import ParticlesBg from 'particles-bg';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <ParticlesBg num={95} type="cobweb" color="#000000" bg={true} />
    </div>
  );
}

export default Home;
