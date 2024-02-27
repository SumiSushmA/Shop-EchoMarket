import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import user from "../assets/user.svg";
import lock from "../assets/lock.svg";
import mail from "../assets/email.svg";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { addUser, error, message, loading } = useSignup();

  function emailChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function passwordChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function nameChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function loginHandler(e: FormEvent) {
    e.preventDefault();

    const userInfo = { username: name, email: email, password: password };
    addUser(userInfo);
  }

  return (
    <main>
      <h1 className='uppercase font-bubble font-black text-center pt-24 text-4xl'>
        clothy.
      </h1>
      <form
        method='post'
        className='flex flex-col justify-center items-center mt-16 space-y-5'
        onSubmit={loginHandler}
      >
        {error ? (
          <p className='text-center bg-red-300 px-4 py-2'>{message}</p>
        ) : (
          ""
        )}
        <div className='bg-primary flex focus-within:border-black focus-within:border-2 border'>
          <img src={user} alt='' className='ml-6' />
          <input
            placeholder='Username'
            onChange={nameChangeHandler}
            type='text'
            className='bg-transparent outline-none px-12 py-4 w-full'
          />
        </div>
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
        <button className='uppercase bg-black font-semibold text-white px-8 py-3'>
          Sign up
        </button>
      </form>
      <div className='text-center mt-8'>
        <p>Already have an account?</p>

        <span className='underline text-gray-400 cursor-pointer'>
          <Link to={"/login"}>Login</Link>
        </span>
      </div>
    </main>
  );
}

export default Signup;
