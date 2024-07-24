import React, { useState } from 'react';
import { auth } from '../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { Text } from "react-native";
import { StyledBody, StyledBox, StyledInput, StyledBemVindo, StyledButtonLogin, StyledSpam, StyledSignUp, } from './CSS';




function LogoV() {

  return (
    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/v-symbol.png" alt="v-symbol"
      style={{ width: '10%', height: '15%', display: 'block', margin: 'auto' }}
    />)
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter('');

  function SignUp() {
    router.replace('/componentes/FormSignUp')
  }

  function userLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('/componentes/ChatBase/ChatBase')

      })
      

  }


  return (

    <StyledBody>
      <StyledBox>
        <div className="login-container">
          <StyledBemVindo>
            <p>Welcome</p>
          </StyledBemVindo>

          <LogoV></LogoV>

          <form>

            <label htmlFor="emailbox"></label>
            <StyledInput
              type="text"
              id="emailbox"
              placeholder='Email Adress'
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required />


            <label htmlFor="passwordbox"></label>
            <StyledInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="passwordbox"
              required />


          </form>

          <StyledButtonLogin onClick={userLogin}>Login</StyledButtonLogin>

          <div>

            <StyledSpam>

              <Text>Don´t have an account? </Text>

            </StyledSpam>


            <StyledSignUp onClick={SignUp}>Sign Up</StyledSignUp>


          </div>

        </div>
      </StyledBox>
    </StyledBody>

  );
};

export default Login;