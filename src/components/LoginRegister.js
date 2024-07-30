import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registering, setRegistering] = useState(false); // State to track registration mode
  const [registrationUsername, setRegistrationUsername] = useState('');
  const [registrationPassword, setRegistrationPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      if (username && password) {
        // Simulate login success, ideally validate with backend here
        // Replace with actual login API call
        setLoggedIn(true);
        setError('');
        navigate('/ProjectTable'); // Navigate to ProjectTable page upon successful login
      } else {
        setError('Please enter username and password.');
      }
    } catch (error) {
      setError('Failed to log in. Please try again.');
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      if (registrationUsername && registrationPassword) {
        // Handle registration logic (e.g., API call)
        // Replace with actual registration API call
        console.log({ registrationUsername, registrationPassword });
        setRegistrationUsername('');
        setRegistrationPassword('');
        setError('');
        setRegistering(false); // Switch back to login view after successful registration
      } else {
        setError('Please enter username and password.');
      }
    } catch (error) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {!loggedIn && !registering ? (
                <>
                  <h2 className="card-title text-center mb-4">Login</h2>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <p className="mt-3 text-center">Don't have an account? <button className="btn btn-link p-0" onClick={() => setRegistering(true)}>Register</button></p>
                  </form>
                </>
              ) : !loggedIn && registering ? (
                <>
                  <h2 className="card-title text-center mb-4">Register</h2>
                  <form onSubmit={handleRegistrationSubmit}>
                    <div className="mb-3">
                      <label htmlFor="registrationUsername" className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="registrationUsername"
                        placeholder="Username"
                        value={registrationUsername}
                        onChange={(e) => setRegistrationUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="registrationPassword" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="registrationPassword"
                        placeholder="Password"
                        value={registrationPassword}
                        onChange={(e) => setRegistrationPassword(e.target.value)}
                        required
                      />
                    </div>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                    <p className="mt-3 text-center">Already have an account? <button className="btn btn-link p-0" onClick={() => setRegistering(false)}>Login</button></p>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <h2>Welcome, {username}!</h2>
                  <p>You are logged in.</p>
                  <button className="btn btn-link p-0" onClick={() => setLoggedIn(false)}>Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
