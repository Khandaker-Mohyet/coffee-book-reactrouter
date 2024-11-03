import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Catagories from '../Components/Catagories';

const Home = () => {

  const categories = useLoaderData()
  console.log(categories)
  return (
    <div>
      <Banner></Banner>
      <Heading title={'Brows coffee by catagories'} subTitle={'Choose your desired  coffee catagories to brows through spece'}></Heading>
      <Catagories categories={categories}></Catagories>
      <Outlet></Outlet>

    </div>
  );
};

export default Home;