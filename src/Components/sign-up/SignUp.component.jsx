import React from 'react';
import './SignUp.styles.scss';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  async submitHandler(e) {
    e.preventDefault();
    document.activeElement.blur();
    // console.log('submitHandler');
    if (this.state.password !== this.state.confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      //   console.log(userCredential);

      await createUserProfileDocument(userCredential.user, {
        displayName: this.state.displayName,
      });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  changeHandler(e) {
    // console.log('changeHandler');
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='sign-up'>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.submitHandler.bind(this)}>
          <FormInput
            type='text'
            name='displayName'
            label='Display name'
            value={this.state.displayName}
            required
            id='DI1'
            onChange={this.changeHandler.bind(this)}
          ></FormInput>
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={this.state.email}
            required
            id='EI1'
            onChange={this.changeHandler.bind(this)}
          ></FormInput>
          <FormInput
            type='password'
            name='password'
            label='Password'
            value={this.state.password}
            required
            id='PI1'
            onChange={this.changeHandler.bind(this)}
          ></FormInput>
          <FormInput
            type='password'
            name='confirmPassword'
            label='Confirm Password'
            value={this.state.confirmPassword}
            required
            id='CPI1'
            onChange={this.changeHandler.bind(this)}
          ></FormInput>
          <CustomButton type='submit'>Create an account</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
