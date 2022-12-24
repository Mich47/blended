import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser({ ...this.state });
    this.setState({
      name: '',
      email: '',
    });
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}
