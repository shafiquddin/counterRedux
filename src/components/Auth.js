import { useState } from 'react';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const email = 'shafiquddin2k@gmail.com'
const password = "123456";
const Auth = () => {
  const dispatch = useDispatch();
  const [credentials,setCredentials] = useState({
    email:'',
    password:''
  })

  const inputChangeHandler = (identifier,value) => {
    setCredentials(preState => {
      return {
        ...preState,
        [identifier]:value
      }
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(credentials.email.trim() === email && credentials.password.trim() === password ){
      dispatch(authActions.login())
      console.log(credentials);
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={credentials.email} onChange={(event)=>inputChangeHandler('email',event.target.value)}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={credentials.password}  onChange={(event)=>inputChangeHandler('password',event.target.value)}/>
          </div>
          <button button="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
