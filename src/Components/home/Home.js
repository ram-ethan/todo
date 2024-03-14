import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className='home d-flex justify-content-center align-items-center'>
            <div className="container d-flex flex-column justify-content-center align-items-center  ">
                <h1 className='text-center'>Organize your <br /> work and life, finally.</h1>
                <p>
                    Become focused, organized, and calm with <br />
                    todo app. The World's best task manages app.
                </p>
                <button className="home-btn p-2">
                    <Link className="nav-link active" aria-current="page" to="/todo">Make Todo List</Link>
                </button>
            </div>
        </div>
    )
}
