import { NavLink } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const AddCoffee = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="bg-neutral-100 min-h-screen flex items-center justify-center px-4">
                <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
                    <h1 className="text-3xl font-semibold text-center text-gray-700">
                        Add New Coffee
                    </h1>
                    <p className="text-center text-gray-500 mt-2">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter coffee name"
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

export default AddCoffee;