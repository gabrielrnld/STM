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

// const varUnits = [
//   {
//     id: 1,
//     unitCode: "10AA",
//     floor: 10,
//     rooms: 2,
//     direction: 0,
//     status: "available",
//     balcony: true,
//     furnished: true,
//     rentPrice: 4000000,
//     rentSchema: "monthly",
//     sellPrice: 500000000,
//   },
//   {
//     id: 2,
//     unitCode: "10AB",
//     floor: 10,
//     rooms: 2,
//     direction: 2,
//     status: "available",
//     balcony: false,
//     furnished: false,
//     rentPrice: 3500000,
//     rentSchema: "monthly",
//     sellPrice: 400000000,
//   },
//   {
//     id: 3,
//     unitCode: "10BA",
//     floor: 10,
//     rooms: 2,
//     direction: 4,
//     status: "sold",
//     balcony: true,
//     furnished: true,
//     rentPrice: 5000000,
//     rentSchema: "monthly",
//     sellPrice: 500000000,
//   },
// ];

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
  const [page, setPage] = useState("list");
  // const [units, setUnits] = useState([...varUnits]);
  const [transactions, setTransactions] = useState([...varTransactions]);
  const [residents, setResidents] = useState([...varResidents]);

  const [selected, setSelected] = useState(null);

  const state = useSelector((data) => data.units);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  const onSwitchPage = (unit) => {
    const findTransaction = transactions.find((transaction) => {
      return transaction.unitId === unit.id;
    });
    if (findTransaction) {
      const findResident = residents.find((resident) => {
        return resident.id === findTransaction.residentId;
      });
      setSelected({ unit, findResident });
    } else {
      setSelected(unit);
    }
    setPage("detailList");
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
        return <Button onClick={() => onSwitchPage(row)}>Tes</Button>;
      },
    },
  ];

  return (
    <Row>
      {state.isloading ? (
        <Col>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      ) : (
        <Col>
          {page === "list" ? (
            <BootstrapTable
              keyField="id"
              data={state.units}
              columns={columns}
              filter={filterFactory()}
            />
          ) : (
            <DetailApartement
              switchToList={setPage}
              selected={selected}
              setSelected={setSelected}
            />
          )}
        </Col>
      )}
    </Row>
  );
}
