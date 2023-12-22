import React, { useState } from 'react';

const SquadForm = ({ onCreateSquad }) => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the parent component's callback to create the squad
    onCreateSquad({ name });
    // Reset the form after submission
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Squad Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button type="submit">Create Squad</button>
    </form>
  );
};

export default SquadForm;