import { Button, Col, Row, Table } from "react-bootstrap";
import { units, residents, transactions } from "./Data";
import filterFactory, {
  customFilter,
  textFilter,
} from "react-bootstrap-table2-filter";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { useState } from "react";

export function ListTransaksi(props) {
  const [trx, setTrx] = useState({});
  const data = transactions.map((trx) => {
    trx.unit = units.find((x) => (x.id = trx.unitId));
    trx.resident = residents.find((x) => (x.id = trx.residentId));
    return trx;
  });

  const columns = [
    {
      dataField: "id",
      text: "#",
    },
    {
      dataField: "unit.floor",
      text: "Floor",
      filter: textFilter(),
    },
    {
      dataField: "unit.unitCode",
      text: "Unit",
    },
    {
      dataField: "resident.fullname",
      text: "Resident",
      filter: textFilter(),
    },
    {
      dataField: "unit.status",
      text: "Status",
    },
    {
      dataField: "price",
      text: "Price",
      formatter: (cell) => {
        return `IDR ${parseInt(cell).toLocaleString("id")}`;
      },
    },
    {
      dataField: "profit",
      text: "Profit",
      formatter: (cell) => {
        return `IDR ${parseInt(cell).toLocaleString("id")}`;
      },
    },

    {
      dataField: "transactionDate",
      text: "Transaction Date",
      sort: true,
    },
    {
      dataField: "unit.rentSchema",
      text: "Rental Scheme",
    },
    {
      dataField: "data",
      text: "Start / End Date",
      formatter: (cell, row) => {
        return `${row.rentStartDate} / ${row.rentEndDate}`;
      },
    },
    {
      dataField: "period",
      text: "Period",
      formatter: (cell) => {
        return `${cell ? cell : 0} months`;
      },
    },
    {
      dataField: "billingDate",
      text: "Billing Date",
    },
    {
      dataField: "action",
      text: "Action",
      formatter: (cell, row) => {
        return (
          <Button onClick={() => setTrx(row)} variant="outline-dark">
            <AiFillEdit />
          </Button>
        );
      },
    },
  ];
  return (
    <div className="container align-items-center col-xxl-8 px-4 py-5">
      <section className="fadedTable" style={{ alignContent: "flex-start" }}>
        <h2 className="m-5">
          <b>Data Transaksi</b>
        </h2>
        <BootstrapTable
          keyField="id"
          striped
          hover
          data={data}
          columns={columns}
          filter={filterFactory()}
          rowStyle={{ backgroundColor: "whitesmoke" }}
        />
      </section>
    </div>
  );
}
