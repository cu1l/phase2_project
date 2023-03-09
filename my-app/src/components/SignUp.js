import React from "react";
import { useState } from "react";


function SignUp({ handleNewAccount }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isCreated, setIsCreated] = useState(false);
    const [firstFavorite, setFirstFavorite] = useState("");

    function createAccount(event) {
        event.preventDefault();
        const newUser = {
            username: username,
            password: password,
            favorites: [firstFavorite]
        }

        handleNewAccount(newUser);

    }


    const message = <div id="first-favorite-radio">
        <p>Pick a place to begin.</p>
        <div id="first-place-selections">
            <div className="ui radio checkbox">
                <input type="radio" name="locations" value="Statue of Liberty" onClick={(event) => setFirstFavorite(event.target.value)}/>
                <label>Statue of Liberty</label>
            </div>
            <div className="ui radio checkbox">
                <input type="radio" name="locations" value="Central Park" onClick={(event) => setFirstFavorite(event.target.value)} />
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