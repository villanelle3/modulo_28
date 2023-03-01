// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import "./index"
import Head from "./components/Head"
import Text from "./components/Paragrafo"
import Form from "./components/Form"


function App() {
  // const hello = "Hello world"
  // let dia = true
  // function retirna(){
  //   return "retorno da função"
  // }
  return (
    <>
      {/* <Perfil/>
      <h1>{hello}</h1>
      <h2>teste 2</h2>
      <h3>{retirna()}</h3>
      <h4>{dia ? "bom dia" : "boa noite"}</h4> */}
      <Head/>
      <Text/>
      <Form/>
    </>
  )
}

export default App
