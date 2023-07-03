import { Component } from "react"
import './index.css'
import Header from "../Header"
import scheduledinterview from './scheduledinterview.json'
import Lottie from 'lottie-react'


class Scheduledinterviews extends Component{
    render(){
        return(
            <>
                <Header bgcolordetails="black" color="white" />
                <div className="scheduled-interviews">
                    <h1>Your Interview Has Been Scheduled</h1>
                    <Lottie animationData={scheduledinterview} />
                </div>
            </>
        )
    }
}

export default Scheduledinterviews