import React, { useContext } from 'react';
import { CiHome } from 'react-icons/ci';
import { HiArrowRightOnRectangle, HiBars3BottomLeft, HiListBullet, HiUser } from 'react-icons/hi2';
import { NavLink, Outlet } from 'react-router-dom';
import { WrapperContext } from '../../hooks/Provider/Provider';

const Dashboard = () => {
    const { setUser } = useContext(WrapperContext)
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet />

                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden absolute left-2 top-2"><HiBars3BottomLeft className='w-10 h-10 text-primary' /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu py-4 pl-4 pr-0 w-64 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                    <li className='my-6 text-center font-bold text-3xl'>Dashboard</li>

                    <NavLink to="/dashboard/profile" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiUser className='inline-flex items-center h-6 w-6 mr-2' /> Profile</NavLink>

                    <NavLink to="/dashboard/activity" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiListBullet className='inline-flex items-center h-6 w-6 mr-2' /> Activity</NavLink>

                    <div className='flex flex-col gap-y-2 mt-6'>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><CiHome className='inline-flex items-center h-6 w-6' /> Home</NavLink>

                        <button className='myBtnSec w-3/5' onClick={() => setUser(null)}>Sign Out <HiArrowRightOnRectangle className='w-5 h-5' /></button>
                    </div>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;