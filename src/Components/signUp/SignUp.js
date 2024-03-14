import React, { useState } from 'react'
import './signup.css'
import axios from 'axios';
import HeadingComp from './HeadingComp'
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({ email: "", username: "", password: "" });
    function handle(e) {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }
    async function handleClick(e) {
        e.preventDefault();
        try {
            if (inputs.email === "" || inputs.password === "" || inputs.username === "") {
                alert("Fill all the darta");
            }
            else {
                const response = await axios.post("http://localhost:4000/api/v1/register", inputs);
                alert(response.data.message);
                setInputs({ email: "", username: "", password: "" });
                history("/signin");
            }
        } catch (error) {
            console.error("Error occurred:", error);
            // Handle error gracefully
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("An error occurred while processing your request.");
            }
        }
    }


    return (
        <div className='signup'>
            <div className="container">
                <div className="row column">
                    <div className="col-lg-8 d-flex justify-content-center align-items-center ">
                        <div className='d-flex flex-column w-100 p-5'>
                            <input className='p-2 m-3 input-signup' type="email" value={inputs.email} name="email" placeholder='abc@gmail.com' onChange={handle} />
                            <input className='p-2 m-3 input-signup' value={inputs.username} type="username" name="username" placeholder='username' onChange={handle} />
                            <input className='p-2 m-3 input-signup' value={inputs.password} type="password" name="password" placeholder='Enter Strong password' onChange={handle} />
                            <button className="btns p-2 m-3" onClick={handleClick}>SignUp</button>
                        </div>

                    </div>
                    <div className="col-lg-4 column  h-100 col-left d-flex justify-content-center align-items-center">
                        <HeadingComp first={"Sign"} second={"Up"} /></div>
                </div>
            </div>

        </div>
    )
}
