import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitHandler = async e => {
    e.preventDefault();
    document.activeElement.blur();
    try {
      const userCredentials = await auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      console.log(userCredentials);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
    this.setState({ email: '', password: '' });
  };

  async signInWithGoogleHandler() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error.message);
    }
  }

  onChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action='' onSubmit={this.submitHandler.bind(this)}>
          <FormInput
            id='emailInput'
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.onChangeHandler.bind(this)}
            label='Email'
            required
          ></FormInput>
          <FormInput
            id='passwordInput'
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.onChangeHandler.bind(this)}
            label='Password'
            required
          ></FormInput>
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton
              isGoogleSignIn={true}
              onClick={this.signInWithGoogleHandler}
            >
              Sign In with GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
