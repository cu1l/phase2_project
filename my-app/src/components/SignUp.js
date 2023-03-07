import React from "react";
import { useState } from "react";


function SignUp({ handleNewAccount }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isCreated, setIsCreated] = useState(false)

    function createAccount(event) {
        event.preventDefault();
        const newUser = {
            username: username,
            password: password
        }

        handleNewAccount(newUser);

    }

    const message = <div id="first-favorite-radio">
        <p>Pick a place to begin.</p>
        <div id="first-place-selections">
            <div className="ui radio checkbox">
                <input type="radio" name="drone" />
                <label>Statue of Liberty</label>
            </div>
            <div className="ui radio checkbox">
                <input type="radio" name="drone" />
                <label>Central Park</label>
            </div>
        </div>
    </div>

    return (
        <div id="signup">
            <h3>Create your account.</h3>
            <form className="ui form" onSubmit={(event) => createAccount(event)}>
                <div className="field">
                    <input type="text" placeholder="Set your username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <input type="password" name="password" placeholder="Set new password" value={password} onChange={(event) => {setIsCreated(true); setPassword(event.target.value) }} />
                </div>
                {isCreated && message}
                <div className="field">
                    <button className="ui button">Get started</button>
                </div>
            </form>
        </div>)

}

export default SignUp;