import React, { useContext, useState } from 'react'
import classes from './auth.module.css'
import {Link,useLocation,useNavigate} from "react-router-dom"
import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'
import {FadeLoader,ClipLoader} from "react-spinners"
function Auth() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [{user},dispatch] = useContext(DataContext)
  const [loading,setLoading] = useState({
    signIn:false,
    signUp:false
})
const navigate = useNavigate()
const navStateData = useLocation()
// console.log(navStateData);
  // console.log(user);
  // console.log(email);
  // console.log(password);
  const authHandler = async (e) =>{
    e.preventDefault()
    console.log(e.target.name);
    if(e.target.name == "signin"){
      setLoading({...loading,signIn:true})
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({ ...loading, signIn: false });
        navigate(navStateData?.state?.redirect || "/"
        )
      }).catch((err)=>{setError(err.message)
        setLoading({...loading,signIn:false})
      })
    }else{
      setLoading({...loading,signUp:true})
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      })
      setLoading({ ...loading, signUp: false });
      navigate(navStateData?.state?.redirect || "/");
    })
      .catch((err)=>{setError(err.message)
        setLoading({...loading,signUp:false})
      })
    }

  }
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
     
          {
            navStateData?.state?.message && (
              <small
              style={{
                padding:"5px",
                textAlign:"center",
                color:"red",
                fontWeight:"bold"
              }}
              >
                {navStateData.state.message}
              </small>
            )
          }
       
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_SignInButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookiea Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account button */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth