// Practice Task.
// Make a ShowHide component:
// • A button that says "Show" or "Hide".
// • When shown, display a paragraph with dummy text.
// • When hidden, paragraph disappears.

import React, { useState } from 'react'

const ShowHide = () => {
    const dummyText = "This is some dummy text to show or hide.";
    const [isVisible, setIsVisible] = useState(false);
  return (
    <>
    <button onClick={()=> setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>

    {isVisible ? dummyText : ''}
    </>
  )
}

export default ShowHide