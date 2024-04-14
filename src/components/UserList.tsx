import React from 'react';

interface UserProps {
  users: {
    name: string;
    email: string;
    breed: string; // Add breed property to the user object
  }[];
}

const UserList: React.FC<UserProps> = ({ users }) => {
  return (
    <div className="userlist">
      <h2>All Users:</h2>
      <ul data-testid="users">
        {users.map((user, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>Breed:</strong> {user.breed}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
