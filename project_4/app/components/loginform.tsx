
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // try {
    // const data = await fetch('/api/form', {
    // method: 'GET',
    // });
    const data = localStorage.getItem("formData")

    console.log(data);

    // if (data.ok) {
    // const parsedData = await data.json(); // Await the JSON parsing
    const parsedData = data ? JSON.parse(data) : null;

    if (parsedData == null) return;

    if (parsedData.email === email && parsedData.password === password) {
      // const response = await fetch('/api/form', {
        // method: 'POST',
        // body: 'loged',
      // });
      console.log(email, password)

        localStorage.setItem("loged", "true")
      // if (response.ok) {
        router.push('/home');
      // } 
    } else {
      console.log('Invalid email or password');
      console.log(password)
      console.log(parsedData.password)
    }

    // } else {
    // console.log('Error while fetching data');
    // }
    // } catch (error) {
    // console.error('An error occurred:', error);
  }


  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Email:
          <input
            type="email"
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
        <button type="submit" className="primaryButton">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
