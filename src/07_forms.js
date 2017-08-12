import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      selectValue: '',
      isGoing: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 每当空间内容发生变化时被调用
  // 用来修改state的值
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.inputValue);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
        <li>input: {this.state.inputValue}</li>
        <li>select: {this.state.selectValue}</li>
        <li>isGoing: {this.state.isGoing.toString()}</li>
        </ul>

        <label>
        Name: <input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} />
        </label>
        <br />

        <label>
        Pick your favorite La Croix flavor:
        <select name="selectValue" value={this.state.selectValue} onChange={this.handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
        </select>
        </label>
        <br />

        <label>
        Is going: <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChange} />
        </label>


        <br />
        <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default NameForm
