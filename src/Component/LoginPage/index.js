import { Component } from "react"
import Cookies from 'js-cookie';
import { Link ,Navigate} from "react-router-dom";
import Lottie from 'lottie-react';
import Loginanimation from './Loginanimation.json'
import './index.css'
import Header from "../Header";


class LoginPage extends Component{
    state = {username: '',password: '',errMsg: '',loginUser: false}

    onChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }
    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    onSuccess = (jwtToken) => {
        Cookies.set("jwt_token", jwtToken, { expires: 1 });
        this.setState({ loginUser: true, username: "", password: "" });
    };

    onFailure = (error) => {
        console.log("Errorrrr")
        this.setState({errMsg: error})
    }

    submitForm = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const userDetails = { username, password };
        console.log(userDetails);
        const url = "http://localhost:3005/login";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(userDetails),
        };
        const response = await fetch(url, options);
        console.log(response)
        if (response.ok === true) {
          const data = await response.json();
          this.onSuccess(data.jwt_token);
        } else if (response.status === 400) {
          const data = await response.json();
          console.log(data)
          this.onFailure(data.error_msg);
        }
      };
         
    render(){
        const {loginUser,errMsg} = this.state
        if (loginUser){
            return <Navigate to="/" />
        }else{
            const isError = errMsg !== ''
            return(
                <>
                <Header color="white" bgcolordetails="black" />
                <div className="login-page-container">
                    <form onSubmit={this.submitForm} className="login-card">
                        <div className="input-container">
                            <label>USERNAME</label>
                            <input type="text" onChange={this.onChangeUsername} className="input-elements" placeholder="Enter email" />
                        </div>
                        <div className="input-container">
                            <label>PASSWORD</label>
                            <input onChange={this.onChangePassword} className="input-elements" type="password" placeholder="Enter password" />
                        </div>
                        <div className="forgot-password-container">
                            <button type="button" className="forgot-btn">Forgot Password</button>
                        </div>
                        <button type="submit" className="login-button">Login</button>
                        <p>If You Are a New User? <Link className="register-btn-link-css" to="/registration">Register</Link></p>
                        {isError && <p className="error-msg">{errMsg}</p>}
                    </form>
                    <div className="login-animation-contianer">
                        <Lottie className="login-animation" loop={true} animationData= {Loginanimation} />
                    </div>
                    {/* <div>
                        <button className="login-social-btn"><img alt="google" className="login-images" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1687343668/Screenshot_475_fstp2w.png" /> <h2>Login With Google</h2></button>
                    </div> */}
                </div>
                </>
            )
        }
    }
}

export default LoginPage