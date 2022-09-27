import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <div as="footer">
      <div className="p-0 py-3 text-center text-bg-dark">
        <span className="text-white ">
          <span> &copy; 2022 </span>
          <a className="text-white text-decoration-none" href="https://enigmacamp.com">
            Enigma Camp
          </a>
        </span>
      </div>
    </div>
  );
}
