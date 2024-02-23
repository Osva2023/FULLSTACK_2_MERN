import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Auth';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loggedIn, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password)
      .then(() => {
        console.log('logged in');
      })
      .catch((err) => console.log(err));
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

