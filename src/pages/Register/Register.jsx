import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { WrapperContext } from "../../hooks/Provider/Provider";

const Register = () => {

    const { user, setUser } = useContext(WrapperContext);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        // Get values by input name
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        setUser(true);
        navigate("/");
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                        </div>

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
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <div>
                            <p className='my-3 font-medium'>Have an account? <Link to="/login" className='cursor-pointer text-secondary underline'>Sign In</Link></p>
                            <hr className='border border-primary' />
                            <p className='text-center my-3 font-semibold'>Or Register with:</p>
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

export default Register;