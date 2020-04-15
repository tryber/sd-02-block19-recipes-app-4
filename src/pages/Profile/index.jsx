import React, { useContext } from 'react';
import RecipeAppContext from '../../context/Context';

const Profile = () => {
  const context = useContext(RecipeAppContext);

  console.log(context);

  return (
    <div>
      <p>Profile</p>
    </div>
  );
};

export default Profile;
