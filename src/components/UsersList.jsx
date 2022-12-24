import PropTypes from 'prop-types';

export const UserList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map(({ id, name, email }) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
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
    })
  ),
};
