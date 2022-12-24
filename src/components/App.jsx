import { nanoid } from 'nanoid';
import { Component } from 'react';
import { data } from '../data/data';
import { Button } from './Button';
import { Form } from './Form';
import { UserList } from './UsersList';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    users: data,
    isFormOpen: false,
    currentAvatar: null,
  };

  handleDelete = id => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id),
    }));
  };

  openForm = () => {
    this.setState({ isFormOpen: true });
  };

  addUser = data => {
    const newUser = {
      id: nanoid(),
      ...data,
      hasJob: false,
    };

    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isFormOpen: false,
    }));
  };

  toggleStatus = id => {
    this.setState(prevState => ({
      users: prevState.users.map(user =>
        user.id !== id ? user : { ...user, hasJob: !user.hasJob }
      ),
    }));
  };

  showAvatar = image => {
    this.setState({ currentAvatar: image });
  };

  closeAvatar = () => {
    this.setState({ currentAvatar: null });
  };

  render() {
    const { users, isFormOpen, currentAvatar } = this.state;
    return (
      <>
        <UserList
          users={users}
          onDelete={this.handleDelete}
          onToggleStatus={this.toggleStatus}
          onModalOpen={this.showAvatar}
        />
        {isFormOpen ? (
          <Form addUser={this.addUser} />
        ) : (
          <Button text="Add user" clickHandler={this.openForm} />
        )}
        {currentAvatar && (
          <Modal avatar={currentAvatar} onCloseModal={this.closeAvatar} />
        )}
      </>
    );
  }
}
