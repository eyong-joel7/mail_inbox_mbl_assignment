
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../redux/actions/authedUser';

const Login = (props) => {  

    const history = useNavigate();
    const { loading, user, error } = props.users;

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    if (credentials.email && credentials.password) {
      props.dispatch(authenticateUser(credentials));
    }
  };
  useEffect(() => {
if(user) {
history('/');
}
  }, [history, user])

  return (
    <div className="container">
      <div className="wrapper">
        <h1>LOGIN</h1>
        <form onSubmit={(e) => submitHandler(e)} className="form">
        {
            error && <div className = 'error'>Unable to Login, {error}</div>

        }
        {
            loading && <div className = 'loading'>We are verifying your credentials, please wait a sec. </div>
        }
          <input
            type="text"
            placeholder="Enter your email address"
            required
            name="email"
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="password"
          />
          <button type="submit" className ='btn'>Submit</button>
        </form>
      </div>
    </div>
  );
};
function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(Login);
