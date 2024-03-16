import { useNavigate } from "react-router-dom";
import o from "../assets/o.svg";
const LandingPage = () => {
    let navigate = useNavigate();
  return (
    <>
    <div className="landing-page">
      <a  href="http://localhost:5173/login">
      <img src={o} className="img-flu"/>
        </a>
    </div>
    
    </>)
  }

  export default LandingPage