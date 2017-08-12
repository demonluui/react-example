import React from 'react';

/*
 * Clock 现在被定义为一个类而不只是一个函数
 * 使用类就允许我们使用其它特性，例如局部状态、生命周期钩子
 */

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timer = setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  tick() {
    // 调用setState内置函数修改 this.state
    // 直接修改不会起作用
    //this.setState({
    //  date: new Date()
    //});

    // Correct
    this.setState((prevState, props) => {
      //console.log(prevState, props);
      return {date: new Date(prevState.date.getTime() + props.offset * 1000)};
    })


  }


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock offset={1} />
      <Clock offset={2} />
      <Clock offset={3} />
    </div>
  )
}

export default App 
