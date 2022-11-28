import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//import {Inicio} from './pages/Inicio'
//import {AcercaDe} from './pages/Acerca de'
//import {Shop} from './pages/Shop'
//import {Contacto} from './pages/contacto'
//import { Error404 } from './pages/error404'

import {Navbar} from './components/navbar/navbar'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import {Inicio,Contacto,Shop,AcercaDe,Error404} from './pages/index'

function App() {


  return (
    <motion.div className="App" 
    animate={{y:-10}}
    initial={{y:-250}}
    transition={{delay:1,type:'spring',stiffness:100}}


    >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Inicio/>}/>  
      <Route path='/Acercade' element={<AcercaDe/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contacto' element={<Contacto/>}/>  
      <Route path='*' element={<Error404/>}/>
      </Routes>
      </BrowserRouter>

    <motion.h2 
    animate={{y:-10}}
    initial={{y:-250}}
    
    >
      Bienvenidos a mi pagina
    </motion.h2>

    
      
    <motion.button 
    initial = {{x:'-100vw'}}
    animate = {{x:0}}
    whileHover = {{scale:1.1,
      textShadow:'9px 8px 2px red',
      boxShadow:'5px 3px 2px green'}}
    >
      BOTON
    </motion.button>
    
    
    

    </motion.div>
    
    
  )
}

export default App
