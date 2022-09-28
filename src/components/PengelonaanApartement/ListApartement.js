import React, { useEffect, useState } from "react";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import DetailApartement from "./DetailApartement";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  numberFilter,
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "../../reducer/apartment-slice";
import { fetchTransactions } from "../../reducer/transaction-slice";
import { fetchResidents } from "../../reducer/resident-slice";

const varTransactions = [
  {
    id: 1,
    unitId: 3,
    residentId: 1,
    transactionDate: "",
    rentStartDate: "",
    rentEndDate: "",
    billingDate: "",
    period: null,
    price: 550000000,
    profit: 50000000,
  },
];

const varResidents = [
  {
    id: 1,
    fullname: "Agus",
    email: "agus@mail.com",
    phone: "123456",
    maritalStatus: "single",
    dependents: 0,
    birthDate: "2000-08-01",
  },
  {
    id: 2,
    fullname: "Septi",
    email: "septi@mail.com",
    phone: "234567",
    maritalStatus: "single",
    dependents: 0,
    birthDate: "2000-09-01",
  },
  {
    id: 3,
    fullname: "Okta",
    email: "okta@mail.com",
    phone: "345678",
    maritalStatus: "single",
    dependents: 0,
    birthDate: "2000-10-01",
  },
];

export default function ListApartement() {
  const [modalShow, setModalShow] = useState(false);

  const [selected, setSelected] = useState(null);

  const state = useSelector((data) => data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApartments());
    dispatch(fetchTransactions());
    dispatch(fetchResidents());
  }, [dispatch]);

  const { units, transactions, residents } = state;

  const handleDisplayModalDetail = (unit) => {
    const findTransaction = transactions?.transactions?.find((transaction) => {
      return transaction.unitId === unit.id;
    });
    console.log(residents);

    if (findTransaction) {
      const findResident = residents?.residents?.find((resident) => {
        return resident.id === findTransaction.residentId;
      });

      setSelected({ unit, findResident });
    } else {
      setSelected(unit);
    }
    setModalShow(true);
  };

  const selectOptionsStatus = {
    available: "available",
    sold: "sold",
  };

  const selectOptionsScheme = {
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
  };

  const columns = [
    {
      dataField: "id",
      text: "#",
    },
    {
      dataField: "floor",
      text: "Floor",
      filter: textFilter(),
    },
    {
      dataField: "unitCode",
      text: "Unit",
    },
    {
      dataField: "rentPrice",
      text: "Price",
    },
    {
      dataField: "sellPrice",
      text: "Rental Price",
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
      filter: selectFilter({
        options: selectOptionsStatus,
      }),
    },
    {
      dataField: "rentSchema",
      text: "Rental Price",
      filter: selectFilter({
        options: selectOptionsScheme,
      }),
    },
    {
      dataField: "data",
      text: "Action",
      formatter: (cell, row) => {
        return (
          <div className="d-flex justify-content-evenly">
            <Button onClick={() => handleDisplayModalDetail(row)}>
              Detail
            </Button>
            <Button onClick={() => handleDisplayModalDetail(row)}>Edit</Button>
            {/* <Button onClick={() => handleDisplayModal(row)}>Detail</Button> */}
          </div>
        );
      },
    },
  ];

  return (
    <Row>
      {units.isloading ? (
        <Col>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      ) : (
        <Col>
          <BootstrapTable
            keyField="id"
            data={state.units.units}
            columns={columns}
            filter={filterFactory()}
          />

          <DetailApartement
            modalShow={modalShow}
            setModalShow={setModalShow}
            selected={selected}
            setSelected={setSelected}
          />
        </Col>
      )}
    </Row>
  );
}
