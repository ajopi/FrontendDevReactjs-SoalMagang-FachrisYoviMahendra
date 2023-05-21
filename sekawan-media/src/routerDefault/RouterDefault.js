import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomepageDefault from '../pages/HomepageDefault/HomepageDefault'

const RouterDefault = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomepageDefault/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterDefault