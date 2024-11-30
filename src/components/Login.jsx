import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext)


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        loginUser(email, password)
            .then((res) => {
                // Signed in 
                const user = res.user;
                console.log(user)
                // ...
                const lastSignInTime = user?.metadata?.lastSignInTime
                const loginInfo= { email, lastSignInTime}
                fetch(`https://coffee-store-server-xi-one.vercel.app/users/${email}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(loginInfo)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
          })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-md lg:min-w-[500px] shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <Link to='/signUp' className="label-text-alt link link-hover">Don't have a account?</Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;