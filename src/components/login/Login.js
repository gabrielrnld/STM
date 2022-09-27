import React from 'react';
import { Form } from 'react-bootstrap';

export default function Login() {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <section className="row flex-lg-row-reserve align-items-center g-5 py-3">
          <div className="col-10 col-sm-8 col-lg-9 text-center">
            <h1 className="display-5 fw-bold lh-1 mb-5">System Management Room</h1>
            <img src="./bg-login.svg" width="600" alt="bg-login" />
          </div>
          <div className="col-lg-3 bg-orange img-round">
            <Form className="mt-5 mb-5">
              <h2 className="mb-3">Login</h2>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input username"
                  className="title-fs"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Input your password"
                  className="title-fs"
                />
              </Form.Group>
              <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-orange btn-fs mx-2">Cancel</button>
                <button className="btn btn-cancel btn-fs" type="submit">
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
