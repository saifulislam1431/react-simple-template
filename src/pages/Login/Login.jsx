import { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { WrapperContext } from "../../hooks/Provider/Provider";

const Login = () => {
    const { user, setUser } = useContext(WrapperContext);
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        // Get values by input name
        const email = form.email.value;
        const password = form.password.value;
        setUser(true);
        navigate("/")



    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div>
                            <label className="label">
                                <Link to="/forgot-password" className="label-text-alt link link-hover text-red-600">Forgot password?</Link>
                            </label>

                            <p className='my-3 font-medium'>New user? <Link to="/register" className='cursor-pointer text-secondary underline'>Sign up</Link></p>
                            <hr className='border border-primary' />
                            <p className='text-center my-3 font-semibold'>Or login with:</p>
                            <div className='text-center'>
                                <button className='flex items-center justify-center gap-4 w-full mb-3 border border-accent py-2 rounded-full font-medium hover:bg-accent hover:text-white'><FaGoogle /> Google</button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Login;