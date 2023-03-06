import React from "react";
import { useState } from "react";


function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div id="login">
            <p>Welcome. <br/>Log in to see travel destinations.</p>
            <form class="ui form">
                <div class="field">
                    <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div class="field">
                    <button class="ui button">Sign In</button>
                </div>

            </form>
        </div>)

}

export default LoginForm;