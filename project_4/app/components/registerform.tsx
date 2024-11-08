'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const RegisterForm = () => {
  const router = useRouter();

  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [sex, setSex] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showInvalidEmailMessage, setShowInvalidEmailMessage] = useState(false);

  function isValidEmail(email: string) {
    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
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
    } else if (score < 10) {
      return 'Moderate';
    } else {
      return 'Strong';
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('fname', fname);
    formData.append('lname', lname);
    formData.append('sex', sex);
    formData.append('birthDate', birthDate);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('password', password);

    const formDataObj = Object.fromEntries(formData);

    if (isValidEmail(email)) {
      console.log(formDataObj);
    } else {
      console.log("Email is not valid");

      return;
    }

    if (checkPasswordStrength(password) === "Weak") {
      console.log("Password is weak");
      return;
    }
    Cookies.set("formData", JSON.stringify(formDataObj))

    router.push("../login");
  };

  const handleEmailChange = (e: any) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!isValidEmail(newEmail)) {
      setShowInvalidEmailMessage(true); // Show the invalid email message
    } else {
      setShowInvalidEmailMessage(false); // Hide the message if email is valid
    }
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
            onChange={(e) => {
              handleEmailChange(e);
            }
            }
            required
          />
          {showInvalidEmailMessage && email != "" && (
            <span style={{ color: 'red', marginLeft: 190, textAlign: "end" }}>Email is not valid</span>
          )}
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {checkPasswordStrength(password) == 'Weak' && password != "" && (
            <span style={{ color: 'red', marginLeft: 240, textAlign: "end" }}>Weak</span>
          )}
          {checkPasswordStrength(password) == 'Moderate' && password != "" && (
            <span style={{ color: 'yellow', marginLeft: 240,textAlign: "end" }}>Moderate</span>
          )}
          {checkPasswordStrength(password) == 'Strong' && password != "" && (
            <span style={{ color: 'green', marginLeft: 240, textAlign: "end" }}>Strong</span>
          )}
        </label>
        <button type="submit" className="primaryButton">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
