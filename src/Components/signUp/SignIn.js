import React, { useState } from 'react'
import './signup.css'
import HeadingComp from './HeadingComp'
import axios from 'axios';
import { UseDispatch, useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';
export default function SignIn() {
    const dispatch = useDispatch();

    const history = useNavigate();
    const [inputs, setInputs] = useState({ email: "", password: "" });
    async function handleSignIn(e) {
        e.preventDefault();
        try {

            await axios.post("http://localhost:4000/api/v1/login", inputs)
                .then((response) => {

                    if ((response.data.message) === "Loginin Successfull") {

                        sessionStorage.setItem("id", response.data.others._id);
                        dispatch(authActions.login());
                        history("/todo");
                    }
                    alert(response.data.message);

                    setInputs({ email: "", password: "" });
                })


        } catch (error) {
            alert("An error occurred while processing your request."); // Display a generic error message
            console.error(error);
        }
    }


    function handleChange(e) {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }
    return (
        <div>
            <div className='signup'>
                <div className="container">
                    <div className="row column">
                        <div className="col-lg-8 d-flex justify-content-center align-items-center ">
                            <div className='d-flex flex-column w-100 p-5'>
                                <input className='p-2 m-3 input-signup' type="email" value={inputs.email} name="email" onChange={handleChange} placeholder='abc@gmail.com' />

                                <input className='p-2 m-3 input-signup' type="password" value={inputs.password} name="password" onChange={handleChange} placeholder='Enter Strong password' />
                                <button className="btns p-2 m-3" onClick={handleSignIn}>SignIn</button>
                            </div>

                        </div>
                        <div className="col-lg-4 column  h-100 col-left d-flex justify-content-center align-items-center">
                            <HeadingComp first={"Sign"} second={"In"} /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
