
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle login logic here

    const cookie = localStorage.getItem("formData");
    // const cookie = cookies().get('data');

    const parsedData = cookie ? JSON.parse(cookie) : null;
    if(parsedData == null) return;

    if(parsedData.email == email && parsedData.password == password){
      router.push('/home')
    } else {
      console.log(parsedData);
    }
  };

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
