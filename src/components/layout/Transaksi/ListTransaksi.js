import { Button, Col, Row, Table } from "react-bootstrap";
import { units, residents, transactions } from "./Data";
import filterFactory, {
  customFilter,
  textFilter,
} from "react-bootstrap-table2-filter";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineAddCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { useEffect, useState } from "react";
import { fetchResidents } from "../../../reducer/resident-slice";
import {
  fetchApartment,
  fetchApartments,
} from "../../../reducer/apartment-slice";
import { fetchTransactions } from "../../../reducer/transaction-slice";

export function ListTransaksi(props) {
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
          <Button
            onClick={() => {
              setTrx(row);
              props.setPage("form");
            }}
            variant="outline-dark"
          >
            <AiFillEdit />
          </Button>
        );
      },
    },
  ];
  const [trx, setTrx] = useState({});

  const state = useSelector((storedState) => storedState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResidents());
    dispatch(fetchApartments());
    dispatch(fetchTransactions());
  }, [dispatch]);
  let data = [];

  // const { transactions } = { ...state };
  let tranx = {
    ...state,
    transactions: { ...state.transactions },
  };
  data = tranx.transactions.transactions?.map((trx) => {
    trx = {
      ...trx,
      unit: state.units.units.find((x) => x.id == trx.unitId),
      resident: state.residents.residents.find((x) => x.id == trx.residentId),
    };
    return trx;
  });

  if (transactions.isLoading) {
    return <p>Loading guest..</p>;
  } else if (!transactions.isLoading && !Array.isArray(data)) {
    return <p>Data tidak ada </p>;
  } else {
    return (
      <div className="container align-items-center col-xxl-8 px-4 py-5">
        <Button
          className="m-2"
          style={{ backgroundColor: "#eeaa7a", color: "black" }}
          size="medium"
          onClick={() => props.setPage("form")}
        >
          <MdOutlineAddCircle size="12px" />
          &nbsp; Tambah Data
        </Button>
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
}
