import React, { useState, useEffect } from 'react';

const Account = ({ user, updateUser, createUser }) => {
  const [option, setOption] = useState(null); 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newShippingAddress, setNewShippingAddress] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    if (user) {
      setFirstName(user.name.split(' ')[0]);
      setLastName(user.name.split(' ')[1]);
      setUsername(user.username);
      setPassword(user.password);
    }
  }, [user]);

  //for handelling the two options
  const handleAction = (selectedOption) => {
    setOption(selectedOption);
  };

  //for handelling the back.
  const handleBack = () => {
    setOption(null);
  };

  //created function for a new account.
  const handleCreateAccount = () => {
    setOption(null);
    alert('Account created successfully!');
  };

  //created function for login.
  const handleLogin = () => {

    // Hardcoded username and password
    const hardcodedUsername = 'Muddassar';
    const hardcodedPassword = 'mg';

    //checking the hardcoded info that it is correct or not
    if (username === hardcodedUsername && password === hardcodedPassword) {
      // If it is correct, will updtae the user state.
      const loggedInUser = {
        username: hardcodedUsername,
        password: hardcodedPassword,
        name: 'Muddassar', //hardcoded name.
        shippingAddress: '203 Albert street, Waterloo,ON' // hardcode address
      };

      
      updateUser(loggedInUser);
      setOption('loggedin');
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleChangeShippingAddress = () => {
    // Update the user's shipping address
    updateUser({ ...user, shippingAddress: newShippingAddress });
    setNewShippingAddress('');
    alert('Shipping address updated successfully!');
  };

  const handleChangePassword = () => {
    // Check if new password and confirm new password match
    if (newPassword === confirmNewPassword) {
      // If the passwords match, update the user state
      const updatedUser = { ...user, password: newPassword };
      updateUser(updatedUser);
      setOption('loggedin');
      setNewPassword('');
      setConfirmNewPassword('');
      //showing the alert if the info is correct.
      alert('Password updated successfully!');
    } else {
      //showing the alert message if the entered info is not correct
      alert('New password and confirm new password do not match');
    }
  };

  return (
    <div className="account">
      <h2>Account</h2>
      {option === null && (
        <div>
          <button onClick={() => handleAction('create')}>Create Account</button>
          <button onClick={() => handleAction('login')}>Login</button>
        </div>
      )}
      {/* form for a new account */}
      {option === 'create' && (
        <>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <label>
            Shipping Address:
            <input
              type="text"
              value={newShippingAddress}
              onChange={(e) => setNewShippingAddress(e.target.value)}
            />
          </label>
          <button onClick={handleCreateAccount}>Create New Account</button>
          <button onClick={handleBack}>Back</button>
        </>
      )}
      {/*form for login */}
      {option === 'login' && (
        <>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleBack}>Back</button>
        </>
      )}
      
      {user && option === 'loggedin' && (
        <div>
          <p>Current Shipping Address: {user.shippingAddress}</p>
          <label>
            New Shipping Address:
            <input
              type="text"
              value={newShippingAddress}
              onChange={(e) => setNewShippingAddress(e.target.value)}
            />
          </label>
          <button onClick={handleChangeShippingAddress}>Change Shipping Address</button>

          <p>Current Password: {user.password}</p>
          <label>
            New Password:
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <label>
            Confirm New Password:
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </label>
          <button onClick={handleChangePassword}>Change Password</button>

          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Account;
