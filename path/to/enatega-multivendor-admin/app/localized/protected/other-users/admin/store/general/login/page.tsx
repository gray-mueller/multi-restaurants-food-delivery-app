# Update login logic to clear previous rider information
import React from 'react';
import { RiderContext } from './state';

const LoginPage = () => {
  const { login } = React.useContext(RiderContext);

  const handleLogin = (riderInfo) => {
    login(riderInfo);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleLogin({ name: 'John Doe', email: 'johndoe@example.com' })}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;