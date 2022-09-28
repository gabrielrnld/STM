import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartment, fetchApartments } from "../../reducer/apartment-slice";
import { fetchResidents } from "../../reducer/resident-slice";
import { useEffect } from "react";

export function FormManageTransactions(props) {
  const { openPage, selectedTransactions } = props;
  const [formData, setFormData] = useState({
    id: selectedTransactions?.id || "",
    unit: selectedTransactions?.unit || "",
    resident: selectedTransactions?.resident || "",
    transactionDate: selectedTransactions?.transactionDate || "",
    rentStartDate: selectedTransactions?.rentStartDate || "",
    rentEndDate: selectedTransactions?.rentEndDate || "",
    billingDate: selectedTransactions?.billingDate || "",
    period: selectedTransactions?.period || "",
    price: selectedTransactions?.price || "",
    profit: selectedTransactions?.profit || "",
    transactionType: selectedTransactions?.transactionType || "",
    isPaid: selectedTransactions?.isPaid || "",
    priceTemp: selectedTransactions?.priceTemp || "",
  });

  const [unitId, setUnitId] = useState();
  const dispatch = useDispatch();
  const stateResident = useSelector((storedState) => storedState.residents);
  const stateUnit = useSelector((storedState) => storedState.units);

  // if (!unitId) {
  //   return null;
  // } else {
  //   useEffect(() => {
  //     dispatch(fetchApartment(unitId));
  //   }, [unitId]);
  // }

  useEffect(() => {
    dispatch(fetchResidents());
    dispatch(fetchApartments());
  }, [dispatch]);

  // console.log(stateResident);

  const resetForm = () => {
    setFormData({
      id: selectedTransactions?.id || "",
      unit: selectedTransactions?.unit || "",
      resident: selectedTransactions?.resident || "",
      transactionDate: selectedTransactions?.transactionDate || "",
      rentStartDate: selectedTransactions?.rentStartDate || "",
      rentEndDate: selectedTransactions?.rentEndDate || "",
      billingDate: selectedTransactions?.billingDate || "",
      period: selectedTransactions?.period || "",
      price: selectedTransactions?.price || "",
      profit: selectedTransactions?.profit || "",
      transactionType: selectedTransactions?.transactionType || "",
      isPaid: selectedTransactions?.isPaid || "",
      priceTemp: selectedTransactions?.priceTemp || "",
    });
  };

  const handleValueChange = (fieldName, field) => {
    const fields = Object.keys(formData);

    if (fields.includes(fieldName)) {
      setFormData({
        ...formData,
        [fieldName]: field.target.value,
      });
    }

    // if (formData.unit !== null && formData.transactionType !== null) {
    //   if (formData.transactionType === "Sewa") {
    //     setFormData({
    //       ...formData,
    //       price: formData.unit.rentPrice,
    //     });
    //   } else if (formData.transactionType === "Jual") {
    //     setFormData({
    //       ...formData,
    //       price: formData.unit.sellPrice,
    //     });
    //   } else {
    //     setFormData({
    //       ...formData,
    //     });
    //   }
    // }

    if (formData.unit !== undefined && formData.transactionType !== undefined) {
      if (formData.transactionType === "Sewa") {
        setFormData({
          ...formData,
          price: formData.unit.rentPrice,
          transactionType: "Sewa",
        });
      } else if (formData.transactionType === "Jual") {
        setFormData({
          ...formData,
          price: formData.unit.sellPrice,
          transactionType: "Jual",
        });
      }
    }

    console.log("tipe: ", formData.transactionType);
    console.log("unit: ", formData.unit);
  };

  const handleValueChangeDropdown = (fieldName, field) => {
    const fields = Object.keys(formData);
    const objField = JSON.parse(field.target.value);
    if (fields.includes(fieldName)) {
      setFormData({
        ...formData,
        [fieldName]: objField,
      });
    }

    console.log("priceRead: ", formData.price);
    console.log("unit: ", formData.unit);
  };

  const handleFormSubmit = (form) => {
    form.preventDefault();
  };

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
                <Form.Label htmlFor="unit" column sm="3">
                  Unit Apartment
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    id="unit"
                    aria-label="UnitOptions"
                    value={JSON.stringify(formData.unit)}
                    onChange={(e) => handleValueChangeDropdown("unit", e)}
                  >
                    {stateUnit.units.map((unit, key) => {
                      return (
                        <option key={key} value={JSON.stringify(unit)}>
                          {unit.unitCode}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="resident" column sm="3">
                  Resident
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    id="resident"
                    aria-label="ResidentOptions"
                    value={formData.resident}
                    onChange={(e) => handleValueChange("resident", e)}
                  >
                    {stateResident.residents.map((resident, key) => {
                      return (
                        <option key={key} value={resident.id}>
                          {resident.fullname}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="jenisTrx" column sm="3">
                  Jenis Transaksi
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    id="jenisTrx"
                    aria-label="TrxOptions"
                    value={formData.transactionType}
                    onChange={(e) => handleValueChange("transactionType", e)}
                  >
                    <option value="Jual">Jual</option>
                    <option value="Sewa">Sewa</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="price" column sm="3">
                  Price (readonly)
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    id="price"
                    type="number"
                    placeholder="Price"
                    disabled={true}
                    // value={formData.price}
                    value={formData.price}
                    onChange={(e) => handleValueChange("price", e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="trxPrice" column sm="3">
                  Transaction Price
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    id="trxPrice"
                    type="number"
                    placeholder="Price"
                    value={formData.priceTemp}
                    onChange={(e) => handleValueChange("priceTemp", e)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="price" column sm="3">
                  Date
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    id="date"
                    type="data"
                    value={formData.transactionDate}
                    onChange={(e) => handleValueChange("transactionDate", e)}
                  />
                </Col>
              </Form.Group>

              {formData.transactionType === "Sewa" ? (
                <>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="price" column sm="3">
                      Start Date
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="date"
                        type="data"
                        value={formData.rentStartDate}
                        onChange={(e) => handleValueChange("rentStartDate", e)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="price" column sm="3">
                      End Date
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="date"
                        type="data"
                        value={formData.rentEndDate}
                        onChange={(e) => handleValueChange("rentEndDate", e)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="price" column sm="3">
                      Periode
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="number"
                        type="number"
                        value={formData.rentEndDate - formData.rentStartDate}
                        onChange={(e) => handleValueChange("period", e)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="price" column sm="3">
                      Billing Date
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        id="date"
                        type="number"
                        value={formData.billingDate}
                        onChange={(e) => handleValueChange("billingDate", e)}
                      />
                    </Col>
                  </Form.Group>
                </>
              ) : (
                ""
              )}

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
