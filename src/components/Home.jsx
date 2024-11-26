import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const loadCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadCoffees)
    
    return (
        <div className='container mx-auto px-5 md:px-10'>
            <h2>Hot hot cold coffee</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    coffees.map(coffee=><CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;