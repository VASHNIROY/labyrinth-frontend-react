import {Link} from 'react-router-dom'
import { NavContainer } from './styledComponents'
import './index.css'

const Header  = (props) => {
    const {bgImgDetails,color,bgcolordetails} = props
    console.log(bgcolordetails)
    return(
        <NavContainer color={color} bgcoolor={bgcolordetails} bgimage={bgImgDetails}>
            <div className='nav-inner-container'>
                <img alt="logo" className='logo' src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1687341124/Screenshot_473_olfbhn.png" />
                <ul className='nav-un-ordered-list-container'>
                    <li className="nav-ordered-list">Reviews</li>
                    <li className="nav-ordered-list">Services</li>
                    <Link to="/registration"><button className='join-button'>Register
                    </button></Link>
                </ul>
            </div>
        </NavContainer>
    )
}
export default Header