import React from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";

export default function DetailApartement(props) {
  const { selected, modalShow, setModalShow, setSelected } = props;

  console.log(selected);
  const handleCloseModal = () => {
    setModalShow(false);
    setSelected(null);
  };

  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detail Apartment {selected?.unitCode}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>Furnished : {selected?.furnished ? `Yes` : `No`}</li>
          <li>Balcony : {selected?.balcony ? `Yes` : `No`}</li>
          <li>Rooms : {selected?.rooms}</li>
          <li>Rent Scheme : {selected?.rentSchema}</li>
          <li>Rent Price : {selected?.rentPrice}</li>
          <li>Sell Price : {selected?.sellPrice} </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
