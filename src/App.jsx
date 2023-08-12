import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import './App.css'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {seconds : 0}
  }
  tick(){
    this.setState(state => ({
      seconds: state.seconds +1
    }))
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return(
        <div>
          Секунды:{this.state.seconds}
        </div>
    )
  }
}

export default App
