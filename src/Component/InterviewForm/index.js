import { Component } from "react"
import {Link} from 'react-router-dom'
import './index.css';
import Header from "../Header";

class InterviewForm extends Component{
    state = {interviewMail: '',intervieName: '', interviewDate:''}


    onChangeEmail = (event) => {
        this.setState({interviewMail: event.target.value})
    }
    onChangeName = (event) => {
        this.setState({interviewName: event.target.value})
    }

    onChangeDate = (event) => {
        this.setState({interviewDate: event.target.value})
    }

    render(){
        return(
            <>
                <Header />
                <div className="interview-form-container">
               <form onSubmit={this.submitForm} className="form-container">
                    <div className="interview-information-container">
                        <h2>Interview Details</h2>
                        <p>Enter Your Details</p>
                    </div>
                    <div className="form-input-container">
                        <label>NAME</label>
                        <input onChange={this.onChangeName} className="interview-form-input-element" type="text" />
                    </div>
                    <div className="form-input-container">
                        <label>EMAIL</label>
                        <input onChange= {this.onChangeEmail} className="interview-form-input-element" type="text" />
                    </div>
                    <div className="form-input-radio-main-container">
                        <div>
                            GENDER
                        </div>
                        <div className="form-input-radio-container">
                                <input className="interview-form-radio-element" name="gender" type="radio" />
                                <label>male</label>
                                <input className="interview-form-radio-element" name="gender" type="radio" />
                                <label>Female</label>
                        </div>
                        <div className="form-input-container">
                        <label>Date</label>
                        <input onChange={this.onChangeDate} className="interview-form-input-element" type="date" />
                    </div>
                    </div>
                    <Link to="/scheduledinterviews"><button className="form-submit-btn" type="submit">Submit Form</button></Link>
               </form> 
            </div>
            </>
        )
    }
}

export default InterviewForm