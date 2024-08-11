import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeCarousel from '../../components/HomeSectionCarousel/HomeCarousel';

  import { mens_kurta } from '../../../Data/Mens_kurtas';
const HomePage = () => {
  return (
    <>
    <div>
        <MainCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeCarousel data={mens_kurta} sectionName={"Men's Kurtas"}/>
        <HomeCarousel data={mens_kurta} sectionName={"Women's Sarees"}/>
        <HomeCarousel data={mens_kurta} sectionName={"Women's Dresses"} />
        <HomeCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
    </div>
    </div>

   
    </>
  )
}

export default HomePage;