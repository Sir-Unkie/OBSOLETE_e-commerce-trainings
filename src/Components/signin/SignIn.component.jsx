import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../form-input/FormInput.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitHandler = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  onChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action='' onSubmit={this.submitHandler}>
          <FormInput
            id='emailInput'
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.onChangeHandler}
            label='Email'
            required
          ></FormInput>
          <FormInput
            id='passwordInput'
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.onChangeHandler}
            label='Password'
            required
          ></FormInput>

          <button type='submit'>Submit Form</button>
        </form>
      </div>
    );
  }
}

export default SignIn;