import React,{ useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword    
  } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { Button, Input } from "@mui/material";
import { Navigate } from 'react-router-dom';
const Login = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState("");

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
            setError(error.message);
        }
      };
    
      const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
          navigateToMap()
        } catch (error) {
            setError(error.message);
        }
      }; 

      const navigateToMap = () => {
        Navigate('/home');
      };

    return (
        <div>
            <div className="display"><h1>OnlyCars 🚗💨</h1></div>
            <div className="login">  
            <div>
            <h3> Login </h3>
            <Input
                placeholder="Email..."
                onChange={(event) => {
                setLoginEmail(event.target.value);
                }}
            />
            <Input
                placeholder="Password..."
                type="password"
                onChange={(event) => {
                setLoginPassword(event.target.value);
                }}
            />
            <Button onClick={login}> Login</Button>
            </div>
            <br />
            <h3>Or</h3>
            <br />
            <div>   
                <h3> Register User </h3>
                <Input
                    placeholder="Email..."
                    onChange={(event) => {
                    setRegisterEmail(event.target.value);
                    }}
                />
                <Input
                    placeholder="Password..."
                    type = "password"
                    onChange={(event) => {
                    setRegisterPassword(event.target.value);
                    }}
                />
        
                <Button onClick={register}> Create User</Button>
            </div>
        </div>
    </div>
    );
};

export default Login;