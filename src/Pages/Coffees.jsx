import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';

const Coffees = () => {
  const data = useLoaderData()
  const [coffees, setCoffees] = useState(data)
  
  const handleSort = (sortBy) => {
    if (sortBy == 'popularity') {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
      setCoffees(sorted)
    }
    else if (sortBy == 'rating') {
      const sorted = [...data].sort((a, b) => b.rating - a.rating)
      setCoffees(sorted)
    }
  }
  return (
    <div>
      <div className="flex justify-between items-center my-12">
      <div><h1 className='text-3xl font-bold'>Sort coffees by Property and Rating</h1></div>
      <div className="">
        <button onClick={()=> handleSort('popularity')} className="mr-3 btn btn-warning">Sort by Property</button>
        <button onClick={()=> handleSort('rating')} className="btn btn-warning">Sort by Rating</button>
      </div>
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
      }
      </div>
    </div>
  );
};

export default Coffees;