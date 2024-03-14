import React from 'react'
import './navbar.css'
import { MdMenuBook } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import {  } from 'react-redux';
import { authActions, store } from '../../store';
export default function Navbar() {
    const dispatch = useDispatch();
    function handleLogOut() {
        dispatch(authActions.logout());
        sessionStorage.clear("id");
    }
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    console.log(isLoggedIn);
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand" to="/"><b className='topic d-flex align-items-center gap-2'> <MdMenuBook /> todo </b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
                            </li>


                            {!isLoggedIn && <>
                                <li className="nav-item m-2">
                                    <Link className="nav-link active btn-nav px-2" aria-current="page" to="/signUp">SignUp</Link>
                                </li>

                                <li className="nav-item m-2">
                                    <Link className="nav-link active btn-nav px-2" aria-current="page" to="/signIn">SignIn</Link>
                                </li></>}

                            {isLoggedIn && <><li className="nav-item m-2 ">
                                <Link className="nav-link active btn-nav px-2" aria-current="page" to="/" onClick={handleLogOut}>LogOut</Link>
                            </li></>}




                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
