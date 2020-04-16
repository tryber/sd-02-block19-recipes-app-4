import React, { useContext } from 'react';
import RecipeAppContext from '../../context/Context';
import Header from '../../components-global/Header';

const Profile = () => {
  const context = useContext(RecipeAppContext);

  console.log(context);

  return (
    <div>
      <Header title={'Perfil'} hasSearchBar={false} />
      <p>Profile</p>
    </div>
  );
};

export default Profile;
