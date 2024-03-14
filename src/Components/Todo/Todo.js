



import React, { useState, useEffect } from 'react';
import './todo.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import TodoCards from './TodoCards';
import axios from 'axios';
let updateArray = [];
export default function Todo() {
    let id = sessionStorage.getItem("id");
    const [inputs, setInputs] = useState({ title: "", body: "" });
    const [arr, setArr] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs({ ...inputs, [name]: value });
    }

    async function submit() {
        // console.log(inputs);
        if (inputs.title === "" || inputs.body === "") {
            toast.error("Title or Body Should not be empty")
        }
        else {
            if (id) {
                await axios.post("http://localhost:4000/api/v2/addTask", { title: inputs.title, body: inputs.body, id: id }).then((response) => {
                    console.log(response);
                    toast.success("Task Added");
                })
                setInputs({ title: "", body: "" });
            }
            else {
                setArr([...arr, inputs]);
                console.log(arr)
                setInputs({ title: "", body: "" });
                console.log(inputs)
                toast.error("Your Task is added but not saved");
            }
        }
        document.getElementById("text-area").style.display = "none";
        // setInputs({ title: "", body: "" });
    }


    const del = async (cid) => {
        if (id) {
            console.log(cid);
            await axios.delete(`http://localhost:4000/api/v2/deleteTask/${cid}`, { data: { id: id } })
                .then((response) => {
                    console.log(response);
                })
        }
        // Update state or handle response as needed

    }


    const dis = (value) => {
        document.getElementById("todo-update").style.display = value;
    }
    const update = (value) => {
        updateArray = arr[value];

    }

    useEffect(() => {
        if (id) {
            const fetchTasks = async () => {

                await axios.get(`http://localhost:4000/api/v2/getTask/${id}`)
                    .then((response) => {

                        setArr(response.data.lists);
                    }
                    )
                // console.log(response);


            }

            fetchTasks();
        }
        else {

        }
    }, [submit]);

    return (
        <>
            <div className='todo'>
                <ToastContainer />
                <div className="container todo-main d-flex my-4 justify-content-center align-items-center flex-column">
                    <div className="inp d-flex flex-column justify-content-center wid " >
                        <input type="text" name="title" placeholder='TITLE' className='my-2 p-2 ins' value={inputs.title} onChange={handleChange} onClick={() => {
                            document.getElementById("text-area").style.display = "block";
                        }} />
                        <textarea type="text" name='body' placeholder='BODY' className='my-2 p-2 ins' id="text-area" value={inputs.body} onChange={handleChange} />
                    </div>
                    <div className='wid d-flex px-2 py-1 justify-content-end my-3'>
                        <button className="btns1" onClick={submit}>Add</button>
                    </div>
                </div>
                <div className="todo-body">
                    <div className="container-fluid">
                        <div className="row cs">
                            {arr && arr.length > 0 && arr.map((items, index) => (
                                <div className='col-lg-3 col-10 mx-5 my-2' key={index}>
                                    <TodoCards
                                        title={items.title}
                                        body={items.body}
                                        display={dis}
                                        id={items._id}
                                        delid={del}
                                        updateId={index}
                                        toBeupdate={update}

                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="todo-update" id="todo-update">
                <div className="container">
                    <Update display={dis} update={updateArray} />
                </div>
            </div>
        </>
    )
}