import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/home/Home'
import Footer from './Components/footer/Footer'
import About from './Components/About/About'
import SignIn from './Components/signUp/SignIn'
import Todo from './Components/Todo/Todo'
import { useDispatch } from 'react-redux';
import { authActions } from './store';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './Components/signUp/SignUp'
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, [])
  return (
    <div>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  )
}
