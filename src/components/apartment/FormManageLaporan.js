import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

export function FormManageLaporan(props) {
const { openPage, selectedReport } = props;
  const [formData, setFormData] = useState({
    id: selectedReport?.id || "",
    floor: selectedReport?.floor || "",
    unit: selectedReport?.unit || "",
    status: selectedReport?.status || "",
    price: selectedReport?.price || "",
    rentalprice: selectedReport?.rentalprice || "",
    rentalschema: selectedReport?.rentalschema || "",
    details: selectedReport?.details || "",
  });
  const dispatch = useDispatch();
 

  const resetForm = () => {
    setFormData({
    id: selectedReport?.id || "",
    floor: selectedReport?.floor || "",
    unit: selectedReport?.unit || "",
    status: selectedReport?.status || "",
    price: selectedReport?.price || "",
    rentalprice: selectedReport?.rentalprice || "",
    rentalschema: selectedReport?.rentalschema || "",
    details: selectedReport?.details || "",
    })
  };

  const handleValueChange = (fieldName, field) => {
    const fields = Object.keys(formData);

    if (fields.includes(fieldName)) {
        setFormData({
            ...formData,
            [fieldName]: field.target.value,
        });
    }
  }

  const handleFormSubmit = (form) => {
    form.preventDefault();

  }

//     if (selectedReport) {
//       dispatch(updateReport(formData));
//     } else {
//       dispatch(createReport(formData));
//     }

//     openPage("list");
//   };

  return (
    <Row as="section" className="d-flex justify-content-center">
      <Col sm="6">
        <Card className="mb-5 shadow">
          <Card.Header className="bg-info">
            <Card.Title className="text-center">Manage Report</Card.Title>
          </Card.Header>
          <Form onSubmit={(e) => handleFormSubmit(e)}>
            <Card.Body>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="floor" column sm="3">
                  Floor
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    id="floor"
                    placeholder="Floor"
                    value={formData.floor}
                    onChange={(e) => handleValueChange("floor", e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="unit" column sm="3">
                  Unit
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    id="unit"
                    placeholder="Unit"
                    value={formData.unit}
                    onChange={(e) => handleValueChange("unit", e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label  column sm="3">
                    Status
                </Form.Label>
                <Col sm="9">
                <Form.Select htmlFor="status" onChange={(e) => handleValueChange("status", e)} value={formData.status}>
                  <option>-</option>
                  <option value="sold">Sold</option>
                  <option value="rented">Rent</option>
                </Form.Select>
                </Col>
                
                
                {/* <Col sm="9">
                  <Form.Control
                    id="status"
                    placeholder="Status"
                    value={formData.price}
                    onChange={(e) => handleValueChange("status", e)}
                  />
                </Col> */}
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="price" column sm="3">
                  Price
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    id="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) => handleValueChange("price", e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="rentalprice" column sm="3">
                  Rental Price
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    id="rentalprice"
                    placeholder="Rental Price"
                    value={formData.rentalprice}
                    onChange={(e) => handleValueChange("rentalprice", e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="rentalschema" column sm="3">
                  Rental Schema
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    id="rentalschema"
                    placeholder="Rental Schema"
                    value={formData.rentalschema}
                    onChange={(e) => handleValueChange("rentalschema", e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="details" column sm="3">
                  Details
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    id="details"
                    placeholder="Details"
                    value={formData.details}
                    onChange={(e) => handleValueChange("details", e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Button type="submit" variant="success">
                  Save
                </Button>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Button
                  type="reset"
                  variant="secondary"
                  onClick={() => resetForm()}
                >
                  Reset
                </Button>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Button variant="warning" onClick={() => openPage()}>
                  Back
                </Button>
                
              </Form.Group>
            </Card.Body>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}