import React from 'react';
import PropTypes from 'prop-types';

const LoginView = props => {
    return(
        <form className="login-form" onSubmit={(e) => props.onSubmitHandler(e)}>
            <div className="user-input-container">
                <label className="user-input" htmlFor="user-name">User Name:</label>
                <input name="userName" id="user-name" 
                    type="email" size="30" maxLength="30" required
                    placeholder="example@gmail.com"
                    onChange={(e) =>props.onChangeHandler(e)} /> <br />
                <label className="user-input" htmlFor="user-password">Password:</label>
                <input name="userPassword" id="user-password"
                   type="password" size="30" maxLength="20" required 
                   onChange={(e) =>props.onChangeHandler(e)}/>
                <label className="error-message"
                ref={props.errorMessageRefHandler}></label>
            </div>
            <input className="input-btn" type="submit" value="submit"/>
        </form>
    );
}

LoginView.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired,
    errorMessageRefHandler: PropTypes.func.isRequired
}

export default LoginView;