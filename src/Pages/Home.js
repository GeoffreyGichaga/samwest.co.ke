import React from 'react'
import Brands from '../Components/Brands';
import CarouselItem from '../Components/Carousel';
import CoProfile from '../Components/CoProfile';
import Item from '../Components/Item';
import Products from '../Components/Products';
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer'



 const Home = () => {
  return (
    <>

    <TopNav/>
    <CarouselItem/>
    <CoProfile/>
    <Products/>
    <div className='mt-5 ms-5'>
            <h3>Top Brands</h3>
        </div>
    <Brands/>
    <Footer/>
    
    

    </>
  )
}


export default Home;