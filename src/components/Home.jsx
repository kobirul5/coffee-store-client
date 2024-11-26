import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData()
    return (
        <div className='container mx-auto px-5 md:px-10'>
            <h2>Hot hot cold coffee{coffees.length}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    coffees.map(coffee=><CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;