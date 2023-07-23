import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Email validation regex
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError('Incorrect Email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (name.trim() === '') {
        setNameError('Name cannot be empty');
        isValid = false;
      } else {
        setNameError('');
      }

    // Password validation regex
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        'Strong Password: password must me like this Abc@123!'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Check if both email and password are not empty
    if (email.trim() === '' && password.trim() === '') {
      setFormError('Email and Password cannot be empty');
      isValid = false;
    } else if (email.trim() === '') {
      setFormError('Email cannot be empty');
      isValid = false;
    } else if (password.trim() === '') {
      setFormError('Password cannot be empty');
      isValid = false;
    } else {
      setFormError('');
    }

    if (name.trim() === '') {
        setFormError('Name cannot be empty');
        isValid = false;
      } else {
        setFormError('');
      }

    return isValid;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setFormError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    setFormError('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setFormError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Proceed with login or further actions
      console.log('Registration successful');
    }
  };

  return (
    <section className="h-screen bg-zinc-900">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="img"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
          <form onSubmit={handleFormSubmit}>

            {/* Name input */}
            <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    type="text"
                    className={`peer block min-h-[auto] w-full rounded border border-white ${
                    nameError ? 'border-red-500' : 'border-white'
                    } text-white bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none shadow-sm focus:border-blue-500 focus:placeholder-transparent text-lg peer-focus:text-base`}
                    id="exampleFormControlInputName"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                />
                {nameError && (
                  <span className="text-red-500 text-sm absolute top-full mt-1">{nameError}</span>
                )}
            </div>

              {/* Email input */}
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                  type="text"
                  className={`peer block min-h-[auto] w-full rounded border ${
                    emailError ? 'border-red-500' : 'border-white'
                  } text-white bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none shadow-sm focus:border-blue-500 focus:placeholder-transparent text-lg peer-focus:text-base`}
                  id="exampleFormControlInput3"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <span className="text-red-500 text-sm absolute top-full mt-1">{emailError}</span>
                )}
              </div>

              {/* Password input */}
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                  type="password"
                  className={`peer block min-h-[auto] w-full rounded border ${
                    passwordError ? 'border-red-500' : 'border-white'
                  } text-white bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none shadow-sm focus:border-blue-500 focus:placeholder-transparent text-lg peer-focus:text-base`}
                  id="exampleFormControlInput33"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <span className="text-red-500 text-sm absolute top-full mt-1">
                    {passwordError}
                  </span>
                )}
              </div>

              {/* Remember me checkbox */}
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck3"
                    defaultChecked
                  />
                  <label
                    className="inline-block pl-[0.15rem] text-blue-500 hover:cursor-pointer"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

               
              </div>

              {/* Submit button */}
              {formError && (
              <div className="text-red-500 text-sm mb-4">{formError}</div>
            )}

                    <button
                    type="submit"
                    className="inline-block w-full rounded bg-red-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    >
                    Register
                    </button>

              {/* Divider */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
              </div>

              {/* Social login buttons */}
              
              <Link to="/signin">
                <button
                type="submit"
                className="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                >
                Sign in
                </button>
            </Link>
            
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;