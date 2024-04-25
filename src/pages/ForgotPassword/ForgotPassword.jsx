import React, { useContext } from 'react';
import { WrapperContext } from '../../hooks/Provider/Provider';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeftCircle, HiOutlineArrowLeftCircle } from 'react-icons/hi2';

const ForgotPassword = () => {
    const { user, setUser } = useContext(WrapperContext);
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        // Get values by input name
        const email = form.email.value;
        navigate("/login")
    }


    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Reset Your Password!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className='inline-flex items-center gap-1 mb-2 font-semibold cursor-pointer' onClick={() => navigate("/login")}>
                            <HiOutlineArrowLeftCircle size={24} /> <span>Back</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;