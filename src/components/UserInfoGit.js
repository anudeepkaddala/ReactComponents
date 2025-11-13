// Practice Task.
// Create a component that fetches GitHub user info when it mounts.
// Display name + avatar.
// Use your GitHub username: anudeepkaddala.

import React, { useEffect, useState } from 'react'

const UserInfoGit = () => {
    const name ='anudeepkaddala';
    const [image, setImage] =useState(null);
    useEffect(() => {
        // Fetch GitHub user info logic here
        fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json())
        .then(data => {
            setImage(data.avatar_url);
            console.log(data);
        })
        .catch(error => console.error('Error fetching GitHub user info:', error));
    },[]);
  return (
    <>
    <img src={image} alt="Avatar" />
    <h1>Name: {name}</h1>
    </>
  )
}

export default UserInfoGit