import PropTypes from 'prop-types';

export const UserList = ({ users, onDelete, onToggleStatus, onModalOpen }) => {
  return (
    <ul>
      {users.map(({ id, name, email, hasJob, avatar }) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>
              Has job:{' '}
              <span onClick={() => onToggleStatus(id)}>{`${hasJob}`}</span>
            </p>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
            <button
              type="button"
              onClick={() => onModalOpen({ src: avatar, alt: name })}
            >
              Show Avatar
            </button>
          </li>
        );
      })}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      hasJob: PropTypes.bool.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired,
};
