import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCard = () => {
  const navigate = useNavigate()
  const { category } = useParams();
  const data = useLoaderData();

  const [coffees, setCoffees] = useState([]); // Initialize as an empty array

  useEffect(() => {
      if (category) {
        const filteredByCategories = data.filter(coffee => coffee.category === category);
        setCoffees(filteredByCategories);
      } else {
        setCoffees(data.slice(0, 6));
      }
  }, [category, data]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
      }
      </div>
      <button className="btn btn-warning mt-4" onClick={()=> navigate('/coffees')}>View all</button>
    </div>
  );
};

export default CoffeeCard;
