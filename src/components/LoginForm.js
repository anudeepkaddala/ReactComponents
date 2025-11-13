import React, { useState } from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        // Login logic here
        e.preventDefault();
        console.log("Login button clicked");
        console.log("Username:", username);
        console.log("Password:", password);

    }
  return (
    <>
    <form onSubmit={handleLogin}>
    <input type = "text" placeholder='Username' value= {username} onChange={(e) => setUsername(e.target.value)}/>
    <br />
    <input type = "password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
    <br />
    <button type="submit">Login</button>
    </form>

    </>
  )
}

export default LoginForm