import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

import lock from "../assets/lock.svg";
import mail from "../assets/email.svg";

import { Link, useNavigate } from "react-router-dom";

import useAuthentication from "../hooks/useAuthentication";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // State for Remember Me checkbox
  const { loginUrl } = useAuthentication();

  const navigate = useNavigate();

  function emailChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function passwordChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function rememberMeHandler(e: ChangeEvent<HTMLInputElement>) {
    setRememberMe(e.target.checked);
  }

  function loginHandler(e: FormEvent) {
    e.preventDefault();

    const userInfo = { email: email, password: password, rememberMe: rememberMe }; // Include rememberMe in userInfo
    // console.log("form submitted");
    // console.log(JSON.stringify(userInfo));
    loginUrl(userInfo);
  }

  return (
      <main className=''>
        <h1 className='uppercase font-bubble font-black text-center pt-24 text-4xl'>
          Shop-EchoMarket.
        </h1>
        <form
            method='post'
            className='flex flex-col justify-center items-center mt-16 space-y-5'
            onSubmit={loginHandler}
        >
          <div className='bg-primary flex focus-within:border-black focus-within:border-2 border'>
            <img src={mail} alt='' className='ml-6' />
            <input
                placeholder='Email'
                onChange={emailChangeHandler}
                type='text'
                className='bg-transparent outline-none px-12 py-4 w-full'
            />
          </div>
          <div className='bg-primary flex focus-within:border-black focus-within:border-2 border'>
            <img src={lock} alt='' className='ml-6' />
            <input
                placeholder='Password'
                onChange={passwordChangeHandler}
                type='password'
                className='bg-transparent py-4 px-12 w-full outline-none'
            />
          </div>
          <div className='flex items-center'>
            <input
                type='checkbox'
                checked={rememberMe}
                onChange={rememberMeHandler}
                className='mr-2'
            />
            <label htmlFor='rememberMe'>Remember Me</label>
          </div>
          <button className='uppercase bg-black font-semibold text-white px-8 py-3'>
            Log in
          </button>
        </form>
        <div className='text-center mt-8'>
          <p>Don't have an account?</p>

          <span className='underline text-gray-400 cursor-pointer'>
          <Link to={"/signup"}>Signup</Link>
        </span>
        </div>
      </main>
  );
}

export default Login;
