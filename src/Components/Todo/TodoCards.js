import React from 'react'
import './todo.css'
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin4Fill } from "react-icons/ri";
// import { Toast } from 'react-toastify/dist/components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function TodoCards({ title, body, id, delid, display, updateId, toBeupdate }) {
    return (
        <div className='p-3 todo-card'>
            <div>
                <h5>{title}</h5>
                <p className='todo-card-p' >{body.split("", 30)}...</p>
            </div>
            <div className='d-flex justify-content-around '>
                <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1' onClick={() => {

                    if (id) {
                        display("block");
                        toBeupdate(updateId)
                    } else {
                        toast.error("SignUp To use this feature")
                    }

                }}>
                    <GrDocumentUpdate className='card-icons ' /> Update
                </div>
                <div className='d-flex justify-content-center gap-1 align-items-center card-icon-head  px-2 py-1 text-danger ' onClick={() => {
                    if (id) { delid(id) }
                    else {
                        toast.error("SignUp To use this feature")
                    }
                }}>
                    <RiDeleteBin4Fill className='card-icons del ' /> Delete
                </div>
            </div>
        </div>
    )
}
