import { useState } from 'react'
import Form from './components/Form'
import Semantics from './components/Semantics'
import { Routes, Route } from "react-router";
import Nav from './components/Nav';
import Ws from './components/Ws';
import Graph from './components/Graph';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import DarkVeil from './components/DarkVeil';


function App() {

  const [semantics, setSemantics] = useState();

  const [statement, setStatement] = useState()
  const [language, setLanguage] = useState()

  return (
    <>
      <Routes>
        <Route element={

          <>
            <div id='darkveilstyle'>
              <DarkVeil />
            </div>

            <div style={{ position: "relative" }}>
              <Nav />
              <Form semantics={semantics} setSemantics={setSemantics} statement={statement} setStatement={setStatement} language={language} setLanguage={setLanguage} />
              <Ws />
              {/* <Graph /> */}
              {/* <Benefits /> */}
              <Footer />
            </div>

          </>} path='/' />


        <Route element={<Semantics semantics={semantics} setSemantics={setSemantics} statement={statement} setStatement={setStatement} />} path='/s' />
      </Routes>
    </>
  )
}

export default App
