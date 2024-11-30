import React from 'react';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id,coffeeChef,coffeeDetails, coffeeName, coffeeSupplier, coffeeCategory, coffeeTaste, photo} = coffee

    const handleDelete= (id)=>{
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-xi-one.vercel.app/coffee/${id}`, {
                    method:"DELETE",
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                  if(data.deletedCount>0){
                    const remaining = coffees.filter(cof => cof.id !== _id);
                      setCoffees(remaining);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                        
                      });
                      
                      
                  }
                })  
            }
          });
    }

    return (
        <div className="flex items-center bg-[#F5F4F1] rounded-lg space-x-4 p-5">
            {/* Coffee Image */}
            <img
                src={photo}// Replace with your image URL
                alt="Black Coffee"
                className="w-24 h-24 rounded-md object-cover"
            />

            {/* Coffee Info */}
            <div className="flex-1">
                <h2 className="text-lg font-bold">Name: {coffeeName}</h2>
                <p className="text-sm">Quantity:- {coffeeChef} </p>
                <p className="text-sm font-semibold">Price: 890 Taka</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-2">
                <button className="btn btn-circle btn-outline btn-sm">
                    <FaEye className="text-gray-500" />
                </button>
                <Link to={`updateCoffee/${_id}`} className="btn btn-circle btn-outline btn-sm">
                    <FaEdit className="text-gray-500" />
                </Link>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline btn-sm text-red-500">
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;