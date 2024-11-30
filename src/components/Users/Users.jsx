import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loader = useLoaderData()
    const [users, setUsers] = useState(loader)

    const handleUserDelete= id =>{
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
                fetch(`https://coffee-store-server-xi-one.vercel.app/users/${id}`,{
                    method: "DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                   if(data.deletedCount>0){
                       Swal.fire({
                           title: "Deleted!",
                           text: "Your file has been deleted.",
                           icon: "success"
                         })
                         const remaining = users.filter(user=> user._id !== id)

                         setUsers(remaining)
                   }
                })
             
            }
          });
    }
    return (
        <div className='container mx-auto'>
            <h1 className="text-3xl">users {users.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map(user=><tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>
                                    <button className='btn ml-2'>E</button>
                                    <button onClick={()=>handleUserDelete(user._id)}
                                    className='btn ml-2'>X</button>
                                </td>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;