import React, { useState } from 'react';
import { cookies } from 'next/headers'

const RegisterForm = () => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [sex, setSex] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function isValidEmail(email: string) {
    // Regular expression for a valid email pattern
    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    // Test the email against the pattern
    return emailPattern.test(email);
  }

  function checkPasswordStrength(password: string) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    let score = 0;
    if (password.length >= minLength) score += 2;
    if (hasUpperCase) score += 2;
    if (hasLowerCase) score += 2;
    if (hasNumbers) score += 2;
    if (hasSpecialChars) score += 2;

    if (score < 8) {
      return 'Weak';
    } else if (score < 12) {
      return 'Moderate';
    } else {
      return 'Strong';
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      fname,
      lname,
      sex,
      birthDate,
      phone,
      email,
      password
    };

    if (isValidEmail(email)) {
      console.log(formData);
      // cookies().set('data', JSON.stringify(formData));
    } else {
      console.log("Email is not email hha");
      return;
    }

    if (checkPasswordStrength(password) === "Weak") {
      console.log("Suga pass");
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          First Name:
          <input
            type="text"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            required
          />
        </label>
        <label>
          Sex:
          <select
            defaultValue={"Male"}
            onChange={(e) => setSex(e.target.value)}
            required
            className=""
          >
            <option value={"Male"}>
              Male
            </option>
            <option value={"Female"}>
              Female
            </option>
          </select>
        </label>
        <label>
          BirthDate:
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="primaryButton">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
