import { Component } from "react"
import {Link} from 'react-router-dom'
import Lottie from 'lottie-react';
import Landingpage from './landingpage.json'
import Header from "../Header";

import './index.css'

class HomePage extends Component{

    render(){
        return(
            <>
                <Header color="white" bgcolordetails="black" />
                <div className="home-page-container">
                    <h1>Welcome to Labyrinth Global Solutions</h1>
                    <div className="home-page-inner-container">
                    <div className="schedule-container">
                        <p>Schedule Your Interview</p>
                        <Link to="/scheduleInterview" className="link-css"><button  type="button" className="schedule-btn">Schedule</button></Link>
                    </div>
                    <div className="landing-page-animation-container">
                        <Lottie loop={true}  animationData={Landingpage}/>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage