import React, { useState } from 'react'


const LikeButton = () => {
    const [liked, setLiked] = useState('false');
    const toggleLike = () => {
        setLiked(!liked);
    }
  return (
    <div>
        <button onClick={(toggleLike)}>{liked? 'Liked ❤️' : 'Like ♡'}</button>
    </div>
  )
}

export default LikeButton