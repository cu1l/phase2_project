import React from "react";
import { useState } from "react";



function LoginForm({logIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const enteredUser = {
            username: username,
            password: password
        }

        logIn(enteredUser);
    }


    return (
        <div id="login">
            <div id="login-welcome"><h3>Welcome. </h3><p>Log in for travel inspiration.</p></div>
            <form className="ui form" onSubmit={(event) => handleSubmit(event)}>
                <div className="field">
                    <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="field" id="sign-in-button-container">
                    <button className="ui button">Sign In</button><p> No account? Sign up <a href={"/signup"}>here.</a></p>
                </div>

            </form>
        </div>)

}

export default LoginForm;