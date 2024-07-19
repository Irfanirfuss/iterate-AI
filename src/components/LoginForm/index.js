import { useState } from "react";

import "./index.css";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const changeUsernameValue = (event) => {
        setUsername(event.target.value);
    };

    const changePasswordValue = (event) => {
        setPassword(event.target.value);
    };

    const submitCreditianls = (event) => {
        event.preventDefault();

        if (username !== "irfan" && password !== "irfuss16") {
            setError("Invalid Creditianls");
        } else if (username !== "irfan") {
            setError("Invalid Username");
        } else if (password !== "irfuss16") {
            setError("Invalid Password");
        } else {
            setError("");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={submitCreditianls}>
                <label htmlFor="username">Username</label> <br />
                <input
                    type="text"
                    id="username"
                    onChange={changeUsernameValue}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    type="password"
                    id="password"
                    onChange={changePasswordValue}
                />{" "}
                <br />
                <br />
                <button type="onSubmit">Submit</button>
                <p className="error">{error}</p>
            </form>
        </div>
    );
};

export default LoginForm;
