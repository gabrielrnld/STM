import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { usersLogin } from "../../reducer/login-slice";

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const state = useSelector((storedState) => storedState.users);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(usersLogin({ username, password }));
    setToken(localStorage.getItem("authorization"));
  };

  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <section className="row flex-lg-row-reserve align-items-center g-5 py-3">
          <div className="col-10 col-sm-8 col-lg-9 text-center">
            <h1 className="display-5 fw-bold lh-1 mb-5">
              System Management Room
            </h1>
            <img src="./bg-login.svg" width="600" alt="bg-login" />
          </div>
          <div className="col-lg-3 bg-orange img-round">
            <Form className="mt-5 mb-5" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Input your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-orange mx-2">Cancel</button>
                <button className="btn btn-cancel" type="submit">
                  Login
                </button>
              </div>
            </Form>
          </div>
        </section>
      </div>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
