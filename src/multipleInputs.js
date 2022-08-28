import React from 'react'

function MultipleInputs() {
  return (
    <>
    <form action="">
        <div>
            <input type="text" placeholder='Name'/><br></br>
            <input type="text" placeholder='UserName'/><br></br>
            <input type="email" placeholder='Email'/><br></br>
            <input type="password" placeholder='Password'/><br></br>
            Select course:
            <input type="radio" name="course"/>MCA
            <input type="radio" name="course"/>MBA<br></br>
            <input type="button" value='Sign Up'/><br></br>
        </div>
    </form>
    </>
  )
}

export default MultipleInputs