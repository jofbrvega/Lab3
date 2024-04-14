import React from 'react';
import Card from "./Card";

interface User {
  name: string;
  email: string;
  imageSrc?: string; // Make imageSrc optional
  imageAlt?: string; // Make imageAlt optional
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <ul className="home__list" key={user.name}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
      <div className="information">
        <Card users={users}/>
      </div>
    </div>
  );
};

export default UserList;