import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state={isOn:false}
  }
  render(){
    let display
    if(this.state.isOn)
    {
      display="on"
    }
    else
    {
      display="off"
    }
    return(
    <h1>The button is turned {display}</h1>
    )
  }
}
export default App