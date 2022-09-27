import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { usersLogin } from "../../reducer/login-slice";

export function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const state = useSelector((storedState) => storedState.users);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, " ", password);
    dispatch(usersLogin({ username, password }));
    setToken(localStorage.getItem("authorization"));
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
