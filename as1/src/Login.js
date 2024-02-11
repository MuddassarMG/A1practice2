import React from 'react';

//created function for login which handle userlogin nad logout.
const Login = ({ user, login, logout }) => {
  return (
    <div>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Login;
