import React, { useState } from 'react';

export default function Conditional() {
  let[userLoggedIn, setUserLoggedIn] = useState(true);

  let num = 20;


  return(
    <div>
      {num <= 10 ? "user is logged in" : "user is not logged in"}
     </div>
  )
}