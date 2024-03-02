import React, { useState, useEffect , useReducer , useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state,action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val , isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR'){
    return {value: state.value , isValid: state.value.includes('@')};
  }
  return {value: '' , isValid: false };
}
const passwordReducer = (state,action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val , isValid: action.val.trim() > 6 };
  }
  if (action.type === 'INPUT_BLUR'){
    return {value: state.value , isValid: state.value.trim() > 6 };
  }
  return {value: '' , isValid: false };
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredCollegeName , setEnteredCollegeName] = useState("PHONICS GROUP OF INSTITUTION");
 // const [emailIsValid, setEmailIsValid] = useState();
  const [collegeNameIsValid , setCollegeNameIsValid] = useState()
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '' ,
    isValid: null,
   }) ;
   const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '' ,
    isValid: null,
   }) ;

   const authCtx = useContext(AuthContext);
  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);
    
  const { isValid : emailIsValid} = emailState;
  const { isValid : passwordIsValid } = passwordState;
  
 useEffect( () => {
   const identifier = setTimeout( () => {
    console.log('checking form validity!');
    setFormIsValid(emailIsValid && passwordIsValid );
     },800)

   return () => {
    console.log('CLEANUP');
    clearTimeout(identifier);
   }
 }, [emailIsValid , passwordIsValid]);


  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT' , val: event.target.value}); 

    setFormIsValid(
      event.target.value.includes('@') && 
      passwordState.isValid ,
      enteredCollegeName.trim().length > 0
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT' , val: event.target.value}); 


    setFormIsValid(
      emailState.isValid && event.target.value.trim().length >  6 && enteredCollegeName.trim().length > 0
    );
  };
  const collegeNameChangeHandler = (event) => {
    setEnteredCollegeName(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const validateCollegeNameHandler = () => {
    setCollegeNameIsValid(
      enteredCollegeName.trim().length > 6 && enteredCollegeName !== ""
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       <Input 
        id = "email" 
        label="E-mail" 
        type="email" 
        isValid={emailIsValid} 
        value = {emailState.value}
        onChange = {emailChangeHandler} 
        onBlur = {validateEmailHandler} />
        
        <Input 
        id = "password" 
        label="password" 
        type="password" 
        isValid={passwordIsValid} 
        value = {passwordState.value}
        onChange = {passwordChangeHandler} 
        onBlur = {validatePasswordHandler} />
       
        <div
          className={`${classes.control} ${
            collegeNameIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            id="collegeName"
            value={enteredCollegeName}
            onChange={collegeNameChangeHandler}
            onBlur={validateCollegeNameHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
