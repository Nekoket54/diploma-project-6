import "./Login.css"
import "../../Main.css"
import bottomIcon from "../../assets/bottomIcon.svg"
import { FcGoogle } from "react-icons/fc";

function Login() {
    return(
        <div className="login">
            <div className="login-boxLogo">
                <p className="login-boxLogo-text">InvestIQ</p>
            </div>
            <div className="login-main">
                <h2 className="login-main-name">InvestIQ</h2>
                <p className="login-main-text">Smart Finance</p>
            </div>
            <img src={bottomIcon} alt="" className="login-photo" />
            <div className="login-register">
                <text className="login-register-text">Ви можете авторизуватися за допомогою <br></br> акаунта Google</text>
                <div className="login-register-box">
                    <FcGoogle />
                    <p className="login-register-box-text">Google</p>
                </div>
                <button className="login-register-btn">Увійти</button>
            </div>
        </div>
    )
}

export default Login
