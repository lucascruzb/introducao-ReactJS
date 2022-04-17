import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Button from "./components/src/Button"
import ComponenteA from "./components/src/ComponentA"
import ComponenteB from "./components/src/ComponentB"

const element = 'Cxlxmbiv Kids Global '
const element2 = <h1>Cxlxmbiv Kids</h1>

function soma (a,b){
    alert(a+b);
}

function App() {
  return (
    <div className="App">
      {element}
      <ComponenteA>
      <Button onClick={() => soma(10,20)} name="Cxlxmbiv Kids"/>
      </ComponenteA>
      <ComponenteB>
      <Button onClick={() => soma(20,40)} name="Cxlxmbiv Kids * 2"/>
      </ComponenteB>
      {element2}

    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
