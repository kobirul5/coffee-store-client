import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import Banner from './Banner';
import Awesome from './Awesome';

const Home = () => {
    const loadCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadCoffees)

    return (
        <div className=''>

            <section className='mb-10'>
                <Banner></Banner>
                <Awesome></Awesome>
            </section>

            <section className='my-10 text-[#331A15] text-center flex flex-col justify-center items-center space-y-3'>
                <p>--- Sip & Savor ---</p>
                <h2 className=' text-3xl md:text-5xl font-bold'>Our Popular Products</h2>
                <button className='btn border border-[#331A15] bg-[#E3B577]'>Add Coffee</button>
            </section>

            <div className='container mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    coffees.map(coffee => <CoffeeCard
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