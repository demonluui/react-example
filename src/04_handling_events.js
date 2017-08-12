import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // 成员函数需要bind
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  // 成员属性在开启属性初始化器语法后，可直接使用
  handleClick1 = () => {
    console.log('this is:', this)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          { this.state.isToggleOn ? 'ON' : 'OFF' }
        </button>
        <br />
        <button onClick={this.handleClick1} > handleClick1 </button>
      </div>
    );
  }
}

export default Toggle
