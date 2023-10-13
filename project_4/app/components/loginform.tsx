
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = Cookies.get("formData")

    console.log(data);

    const parsedData = data ? JSON.parse(data) : null;

    if (parsedData == null) return;

    if (parsedData.email === email && parsedData.password === password) {
        console.log(email, password)

        Cookies.set("loged", "true")
        router.push('/home');
    } else {
      console.log('Invalid email or password');
      console.log(password)
      console.log(parsedData.password)
    }
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
