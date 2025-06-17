import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email) validationErrors.email = 'Email is required';
    else if (!validateEmail(email)) validationErrors.email = 'Invalid email format';

    if (!password) validationErrors.password = 'Password is required';

    if (!isLogin) {
      if (!confirmPassword) {
        validationErrors.confirmPassword = 'Please confirm your password';
      } else if (password !== confirmPassword) {
        validationErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate form submission
      alert(`${isLogin ? 'Logging in' : 'Signing up'} with email: ${email}`);
      resetForm();
    }
  };

  return (
    <div className="form-main">
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button className={isLogin ? 'active' : ''} onClick={() => { setIsLogin(true); resetForm(); }}>
              Login
            </button>
            <button className={!isLogin ? 'active' : ''} onClick={() => { setIsLogin(false); resetForm(); }}>
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Login Form' : 'Signup Form'}</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}

            {!isLogin && (
              <>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </>
            )}

            {isLogin && (
              <>
                <a href="#">Forgot Password?</a>
                <p>
                  Not a Member? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); resetForm(); }}>Signup now</a>
                </p>
              </>
            )}

            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
