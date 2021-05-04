import React from 'react';

function Login(props){
    const {email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError}=props;
    return (<section className="login">
        <div className="loginContainer">
            <label>Email</label>
            <input type="email"
            required
            autoFocus
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Username"/>
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password"
            required
            autoFocus
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            placeholder="Password"/>
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount ? (
                    <div>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account?<span onClick={()=> setHasAccount(!hasAccount)}>Sign Up</span></p>
                    </div>
                ): (<div>
                    <button onClick={handleSignUp}>Sign Up</button>
                    <p>Have an account?<span onClick={()=> setHasAccount(!hasAccount)}>Sign In</span></p>
                    </div>)}
            </div>

        </div>
    </section>
    );
}
export default Login;