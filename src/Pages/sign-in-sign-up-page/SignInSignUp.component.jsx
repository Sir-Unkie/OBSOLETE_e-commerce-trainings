import React from 'react';
import SignIn from '../../Components/signin/SignIn.component';
import './SignInSignUp.style.scss';
import SignUp from '../../Components/sign-up/SignUp.component';

const SignInSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInSignUp;
