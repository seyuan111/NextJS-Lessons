import React, {useState} from 'react'
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (
    <div>
        <Link href="/" className="text-3xl bg-green-500 text-amber-700 px-[20px] py-[10px] items-center m-5 rounded-lg">Link</Link>
        <Link href='/Hero' className="ml-5">Go to Hero</Link>
        <Link href="/Login" className="ml-5">Go To Login</Link>
        <Link href="/Contact" className="ml-5">Go to Contact</Link>
        <div className="flex flex-col justify-center items-center bg-gray-400">
        <h1 className="text-4xl m-8">Login Page</h1>
        <form className="mb-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="px-3 py-2 bg-blue-200 rounded-lg" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login