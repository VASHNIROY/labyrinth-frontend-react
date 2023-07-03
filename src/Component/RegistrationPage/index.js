import { Component } from "react";
import { Link } from "react-router-dom";
import RegistrationAnimation from './RegistrationAnimation.json'
import Lottie from 'lottie-react';
import Popup from 'reactjs-popup'
import './index.css'
import Header from "../Header";
import success from './success.json'

class RegisterPage extends Component{
    state = {
        username: '',
        password: '',        
        confirmPassword: '',
        registered: false,
        errorMessage: ''
      };

      handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
      };
    
      handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
      };
    
      handleConfirmPasswordChange = (event) => {
        this.setState({ confirmPassword: event.target.value });
      };
    
      submitForm = async (event) => {
        event.preventDefault();
        try {
          const { username,password  } = this.state;
          console.log(username, password);
    
          const response = await fetch("http://localhost:3005/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });
    
          if (response.ok) {
            this.setState({ errorMessage: "", registered: true });
            console.log("User created successfully");
            //return <Navigate to="/" />
          } else {
            const data = await response.json();
            console.log(data);
            this.setState({ errorMessage: data.err_Msg });
          }
        } catch (error) {
          console.error(error);
          this.setState({ errorMessage: "An error occurred while registering" });
        }
      };

    render(){
        const { username, password, confirmPassword,errorMessage } = this.state;
        const isError =  errorMessage !== ''
        /*if (registered){
            return <Navigate to="/" />
        }else{*/  
        return(
            <>
                <Header color="white" bgImgDetails="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBwgHBwcHBwcNBw0NDQcHBw8ICQcNFREWFhURHx8YKCggGCYlJx8VITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDisZFRkrLS03KysrKysrKy0rKysrLS0rKystKysrKy0tKystKysrKysrKystKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAgAHBv/EABUQAQEAAAAAAAAAAAAAAAAAAAAB/8QAGQEBAQEBAQEAAAAAAAAAAAAAAgYBAwcF/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/APegh9B54AQ0mTSK0oKGoIoBTU0igoKaUOCimppQoKK1FKHBU01NKHBU01NKHBU00U4cFTTU0ocFTTU04cFTTU0ocFTTRThxNFNTShwVNNTShwVNNFKHBU01NOFBQ1BHHv2YJdGhmBFBRTUtKMkikUFSaKUKBNNFKHBU01NKFGqaamlDgqaamlDgqaaKcOJopqaUOCppqaUOCppqacdIKmmppQ4KK1FOFBU01NKOkFTTU0oUFFNTShwVNNScOMk0EUdASQl0awrCtKChgRQCmppFBRTU0ocFFNTShQUVqKRwVNNTShwVNNTShwUVqKcOCppqaUOCppqacOCppqaUOCppopw4KmmppQ4KmmppQ4KmmilDgqaamnCgorCkcFFNSUKOgMwS6NgopqWwoARSKCpNFIoKK1FKHBU01NKFGqaamlDgqaamlDgqaaKcOJopqaUOCppqacOCppqaUdIKmmppQ4KKamnCgqaamlHSCppqaUKCimppQ4Kmmppw41TTRShQVJSRx0JNIqWRkFSaKRQClNKFBQamkcappqaUKCimppQ4KmmppQ4KmmppQ4KK1FOHBU01NKHBU01NOHBU01NKHBU00UocFTTU04cFTTU0ocFTTU0ocappqacKCisKRwUU1JQoAwIo6DRTUpZGwAgigqaaKRQCtRShwVNNFKFBU01NKHBU01NKHBU01NOHGqaamlDgqaamlDgqaamnDgqaamlHSCimppwoKmmppR0gqaamlCgorVNKHGqaamnDjJpopQoKmmpI41DBrY6DUkJdGwCmppQoKCmlDgopqaUKCgppQ4KmmppQ4KmmppQ4KK1FOHBU01NKHBU01NOHBU01NKHBU00UocFTTU04cFTTU0ocFTTRShxNFNTThQUMCOCimpKFBQ1BG1SQ1roAIqXRsFTTQRQCtRShwVNNFKFAmmppQ4KmmppQ5BU01NOHBRTU0ocFTTU0ocFTTamnDgqaamlHSCitRThQVNNTSjpBU01NKFGqaamlDgqaamnDjVNNFIoKmlJHGDBrYKGoInQaKampeI2AU1NI41TTU0oUApqaUOCppqaUOCppqaUOCitRThwVNNTShwVNNTThwVNNTShwVNNFKHBU01NOHBU01NKHBRWopHBU01NOFBQ1BHBRTU0oUFDAiZNKa0owYEToNTSKl0bBRWopQ4KmmilCgqaamlDgqaamlDgqaaKcOCppqaUOCppqaUOCppqacOCppqaUdIKKamnCgqaamlHSQVNNTShRqmmppQ4Kmmppw41TSKRQVNKaRxgwaUFBqSawZmk//9k=" />
                <div className="register-page-container">
                <form onSubmit={this.submitForm} className="register-card">
                        <div className="register-input-container">
                            <label>USERNAME</label>
                            <input type="text" value={username} onChange={this.handleUsernameChange} className="register-input-elements" placeholder="Enter username" />
                        </div>               
                        <div className="register-input-container">
                            <label>PASSWORD</label>
                            <input value={password} onChange={this.handlePasswordChange} className="register-input-elements" type="password" placeholder="Enter password" />
                        </div>
                        <div className="register-input-container">
                            <label>Confirm Password</label>
                            <input value={confirmPassword} onChange={this.handleConfirmPasswordChange} className="register-input-elements" type="password" placeholder="Re Enter password" />
                        </div>
                        <Popup
                            modal
                            trigger={
                              <button type="submit" className="register-button">Register</button>
                            }
                          >
                            {close => (
                              <div className="popup-container">
                                <div className="success-container">
                                  <Lottie animationData={success} />
                                  <h3>Congratulations!! You're Successfully Registered.</h3>
                                  <div className="popup-btns-container">
                                  <button
                                    className="btn cancel-button"
                                    type="button"
                                    onClick={() => close()}
                                  >
                                    Cancel
                                  </button>
                                  <Link to="/loginpage"><p className="login-btn-link-css">Login</p></Link>
                                </div>
                                </div>
                              </div>
                            )}
                          </Popup>
                            <p>Do You Already have an Account? <Link className="link-css" to="/loginpage">Login</Link></p>
                            {isError && <p className="error-msg">{errorMessage}</p>}
                    </form>
                    
                <div className="register-animation-contianer">
                <Lottie className="register-animation" loop={true} animationData= {RegistrationAnimation} />
                </div>
                </div>
            </>
        )
    }
}

export default RegisterPage