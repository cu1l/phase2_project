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
            <p>Welcome. <br/>Log in to see travel destinations.</p>
            <form className="ui form" onSubmit={(event) => handleSubmit(event)}>
                <div className="field">
                    <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="field">
                    <button className="ui button">Sign In</button>
                </div>

            </form>
        </div>)

}

export default LoginForm;