import React, { useState } from "react";
import axios from "axios";

interface UserFormProps {
  onUserAdd: (user: User) => void;
}

function UserForm({ onUserAdd }: UserFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null); // Specify type as string or null

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.get("https://api.thecatapi.com/v1/breeds");
      const breeds = response.data;
      const randomIndex = Math.floor(Math.random() * breeds.length);
      const randomBreed = breeds[randomIndex];
      onUserAdd({ name, email, breed: randomBreed.name }); // Add random cat breed to user object
    } catch (error: any) { // Specify the type of 'error' as 'any'
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="userform">
      <div className="userforminput">
        <label htmlFor="name">Name:</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="userforminput">
        <label htmlFor="email">Email:</label>
        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
      {error && <div>Error: {error}</div>}
    </form>
  );
}

export default UserForm;
