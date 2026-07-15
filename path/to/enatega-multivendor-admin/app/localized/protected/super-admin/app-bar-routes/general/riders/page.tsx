# Update rider information display to reflect current logged-in rider
import React from 'react';
import { RiderContext } from '../../store/general/state';

const RidersPage = () => {
  const { riderInfo } = React.useContext(RiderContext);

  if (!riderInfo) {
    return <div>No rider information available</div>;
  }

  return (
    <div>
      <h1>Rider Information</h1>
      <p>Name: {riderInfo.name}</p>
      <p>Email: {riderInfo.email}</p>
    </div>
  );
};

export default RidersPage;