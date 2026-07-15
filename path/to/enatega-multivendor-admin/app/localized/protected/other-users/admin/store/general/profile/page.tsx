# Clear rider information after log-out
import React from 'react';
import { RiderContext } from './state';

const ProfilePage = () => {
  const { riderInfo, logout } = React.useContext(RiderContext);

  if (!riderInfo) {
    return <div>No rider information available</div>;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Rider Information</h1>
      <p>Name: {riderInfo.name}</p>
      <p>Email: {riderInfo.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;