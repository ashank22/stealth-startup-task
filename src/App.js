import  Body  from "./Components/Body"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import Data from "./Components/Data"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react"
import { FormProvider } from "./contexts/FormContext";

import FormSuccess from "./Components/Success"
function App() {


  return (
    <>
    <FormProvider>
      <BrowserRouter>
    <div className="bg-bg min-h-screen px-10 py-3 flex flex-col gap-16 md:py-10 px-10 justify-between lg:">
      <Header/>
        <Routes>
    
          <Route path='/' element={<Body/>}/>
          <Route path='/success' element={<FormSuccess/>}/>
          <Route path='/data' element={<Data/>}/>
        </Routes>
        <Footer/>
        </div> 
      </BrowserRouter>
      </FormProvider>
    </>
    
  )
}

export default App
