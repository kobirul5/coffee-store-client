import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp= (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)
        createUser(email, password)
        .then((result) => {
            // Signed up 
            const user = result.user;
            console.log(result)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign UP now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm lg:min-w-[500px] shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover">Already have a account?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign UP</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;