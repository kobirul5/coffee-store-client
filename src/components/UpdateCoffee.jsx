import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, coffeeChef, coffeeDetails, coffeeName, coffeeSupplier, coffeeCategory, coffeeTaste, photo } = coffee


    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target
        const coffeeName = form.coffeeName.value
        const coffeeChef = form.coffeeChef.value
        const coffeeSupplier = form.coffeeSupplier.value
        const coffeeTaste = form.coffeeTaste.value
        const coffeeCategory = form.coffeeCategory.value
        const coffeeDetails = form.coffeeDetails.value
        const photo = form.photo.value
        const newCoffee = { coffeeChef, coffeeDetails, coffeeName, coffeeSupplier, coffeeCategory, coffeeTaste, photo }

        // send data to server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.matchedCount) {
                    Swal.fire({
                        title: 'successful',
                        text: 'Update Coffee Successfully',
                        icon: 'success',
                        confirmButtonText: 'close'
                    })
                }
            })
    }



    return (
        <div>
            <Navbar></Navbar>

            <div className=" min-h-screen flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-4xl p-6 bg-neutral-100 shadow-lg rounded-lg">
                    <h1 className="text-3xl font-semibold text-center text-gray-700">
                        Add New Coffee
                    </h1>
                    <p className="text-center text-gray-500 mt-2">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                    <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter coffee name"
                                name='coffeeName'
                                defaultValue={coffeeName}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter coffee chef"
                                name="coffeeChef"
                                defaultValue={coffeeChef}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter coffee supplier"
                                name="coffeeSupplier"
                                defaultValue={coffeeSupplier}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter coffee taste"
                                name="coffeeTaste"
                                defaultValue={coffeeTaste}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter coffee category"
                                name="coffeeCategory"
                                defaultValue={coffeeCategory}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter coffee details"
                                name="coffeeDetails"
                                defaultValue={coffeeDetails}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control sm:col-span-2">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter photo URL"
                                name="photo"
                                defaultValue={photo}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <button className="btn btn-primary w-full sm:col-span-2 border-[#661d00] text-white bg-[#D2B48C] hover:bg-[#b89576] transition">
                            Add Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;