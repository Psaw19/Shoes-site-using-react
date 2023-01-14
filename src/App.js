import React from 'react';
import './Stylesheets/App.css';
import Card from "./Components/Card";
import Heading from './Components/Heading';
import Navbar from './Components/Navbar';
import Product from './Components/Products';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Heading />
      <div className='cards'>
        <div className='disp'>
          {Product.map((val) => {
            return (
              <Card
                imgsrc={val.p_img}
                proname={val.p_name}
                proprice={val.p_price}
                prosize={val.p_size}
                prolink={val.p_link}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
