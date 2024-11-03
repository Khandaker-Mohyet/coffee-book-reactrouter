import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {
  const { id } = useParams()
  const data = useLoaderData()

  const [coffee, setCoffee] = useState()
  const {image, category, type, origin, rating, popularity}= coffee

  useEffect(() => {
    const dingleData = data.find(coffee => coffee.id == id)
    setCoffee(dingleData)
  }, [data, id])
  return (
    <div>
      <img src={image} alt="" />
      <h1 className="text-xl mx-auto">Name: {coffee.name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
      <p>Popular: {popularity}</p>
      <button className="btn btn-warning">Ad Favorit</button>
    </div>
  );
};

export default CoffeeDetails;