import React from 'react'

export default function InputForm() {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label style={{ color: "white" }}>Email</label>
          <input type="email" className="input" required></input>
        </div>
        <div className="form-control">
          <label style={{ color: "white" }}>Password</label>
          <input type="password" className="input"  required></input>
        </div>
        <button type="submit">Login</button>
        <br></br>
        <p>Create new account</p>
      </form>
    </>
  );
}
