import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import { useState } from 'react'
import {v4 as uuidv4} from "uuid"
function App() {
  const [expenses, setExpenses] = useState([
    {
      id:uuidv4(),
      month:1,
      date:"2024-01-05",
      item:"식비",
      amount:100000,
      description:"세광양대창5"
    },
    {
      id:uuidv4(),
      month:1,
      date:"2024-01-05",
      item:"식비",
      amount:100000,
      description:"세광양대창3"
    },
    {
      id:uuidv4(),
      month:1,
      date:"2024-01-05",
      item:"식비",
      amount:100000,
      description:"세광양대창2"
    },
    {
      id:uuidv4(),
      month:1,
      date:"2024-01-05",
      item:"식비",
      amount:100000,
      description:"세양대창1"
    }
  ]);

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home expenses={expenses} setExpenses={setExpenses}/>}/>
      <Route path='/detail' element={<div>디테일</div>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
