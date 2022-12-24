import { nanoid } from 'nanoid';
import { Component } from 'react';
import { data } from '../data/data';
import { Button } from './Button';
import { Form } from './Form';
import { UserList } from './UsersList';

export class App extends Component {
  state = {
    users: data,
    isFormOpen: false,
  };

  handleDelete = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id != id),
    }));
  };

  openForm = () => {
    this.setState({ isFormOpen: true });
  };

  addUser = data => {
    const newUser = {
      id: nanoid(),
      ...data,
    };
    this.setState(prevState => ({ users: [...prevState.users, newUser] }));
  };

  render() {
    const { users, isFormOpen } = this.state;
    return (
      <>
        <UserList users={users} onDelete={this.handleDelete} />
        {isFormOpen ? (
          <Form addUser={this.addUser} />
        ) : (
          <Button text="Add user" clickHandler={this.openForm} />
        )}
      </>
    );
  }
}
