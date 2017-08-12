import React from 'react';


// 函数是组件的最简单形式
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 也可以写成类的形式，props以属性的形式访问
/*
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
*/

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default App 
