import React from 'react';
import SquadForm from '../../components/SquadForm/SquadForm';
// import { signUp } from '../../utilities/users-service';
import { useState} from 'react';


const CreateSquadPage = ({ user, setUser}) => {
  const handleCreateSquad = async (squadData) => {
    try {
      const response = await fetch('/api/squads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify(squadData),
      });

      if (response.ok) {
        // Handle successful squad creation
        console.log('Squad created successfully!');
      } else {
        // Handle errors
        console.error('Error creating squad:', await response.json());
      }
    } catch (error) {
      console.error('Error creating squad:', error);
    }
  };

  return (
    <div>
      <h2>Create a Squad</h2>
      <SquadForm onCreateSquad={handleCreateSquad} />
    </div>
  );
};

export default CreateSquadPage;
