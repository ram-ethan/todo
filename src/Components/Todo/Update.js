import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Update({ display, update }) {
    useEffect(() => {
        setInputs({
            title: update.title,
            body: update.body
        });
    }, [update])
    const [inpts, setInputs] = useState({ title: "", body: "" });
    // console.log(inputs);
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs({ ...inpts, [name]: value });
    }
    async function handleClick() {
        console.log(inpts);
        display("none");

        await axios.put(`http://localhost:4000/api/v2/updateTask/${update._id}`, inpts).then((response) => {
            console.log(response);
        });

    }

    return (
        <div className='p-5 d-flex justify-content-center flex-column update'>
            <h3>Update Your Task</h3>
            <input type="text" className='ins inp my-4 w-100 p-3' placeholder='TITLE'
                name={"title"}
                value={inpts.title}
                onChange={handleChange}
            />
            <textarea className='inp ins W-100 p-3' placeholder='BODY'
                name={"body"}
                value={inpts.body}
                onChange={handleChange}></textarea>

            <div className='d-flex'>
                <button className='btn btn-dark my-4' onClick={handleClick} >UPDATE</button>
                <button className='btn btn-danger my-4 mx-3' onClick={() => {
                    display("none");
                }}>CLOSE</button>
            </div>
        </div>
    )
}

// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },