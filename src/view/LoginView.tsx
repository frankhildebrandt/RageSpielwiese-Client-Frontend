import "./LoginView.css"
import {useEffect, useState} from "react";

type LoginViewProps = {
    username: string;
    password: string;
}

export default function LoginView() {

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    function registerClick() {
        // @ts-ignore
        mp.trigger("client:registerData", state.username, state.password);
    }

    function loginClick() {
        // @ts-ignore
        mp.trigger("client:loginData", state.username, state.password);
    }

    return (
        <div className={"loginpage"}>
            <div className={"login-box"}>
                <p className={"login-title"}>Willkommen auf Toyworld</p>
                <div className={"login-inputs"}>
                    <input type="text" placeholder="Username" className={"login-inputs-username"} value={state.username}
                           onChange={(e) => setState({...state, username: e.target.value})}/>
                    <input type="password" placeholder="Password" className={"login-inputs-password"}
                           value={state.password}
                           onChange={(e) => setState({...state, password: e.target.value})}/>
                </div>
                <div className={"login-buttonbar"}>
                    <div className={"login-registerbutton"} onClick={registerClick}><p
                        className={"login-registerbutton-text"}>Register</p>
                    </div>
                    <div className={"login-loginbutton"}><p className={"login-loginbutton-text"}
                                                            onClick={loginClick}>Login</p></div>
                </div>
            </div>
        </div>
    )
}