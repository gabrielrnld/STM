import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { units, residents, transactions } from "./Data";
import filterFactory, {
  customFilter,
  textFilter,
} from "react-bootstrap-table2-filter";
export function Transaksi(props) {
  // const state = useSelector((storedState) => store.ApartementUnit);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetch());
  // }, [dispatch, action]);

  // if (state.isLoading) {
  //   return <p>Loading guest..</p>;
  // } else if (!state.isLoading && !Array.isArray(state.guest)) {
  //   return <p>Data tidak ada </p>;
  // } else {

  // const data = transactions.map((trx, idx) => {
  //   var unit = units.find((x) => (x.id = trx.unitId));
  //   var resident = residents.find((x) => (x.id = trx.residentId));
  //   var id = idx + 1;

  //   // trx.unit = units.find((x) => (x.id = trx.unitId));
  //   // trx.resident = residents.find((x) => (x.id = trx.residentId));
  //   return { ...trx, ...unit, ...resident, id };
  // });

  const data = transactions.map((trx) => {
    trx.unit = units.find((x) => (x.id = trx.unitId));
    trx.resident = residents.find((x) => (x.id = trx.residentId));
    return trx;
  });

  const filterFloor = (cell, row) => {
    return row.unit.floor;
  };

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
        return `${cell} months`;
      },
    },
    {
      dataField: "billingDate",
      text: "Billing Date",
    },
  ];
  return (
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns}
      filter={filterFactory()}
    />
  );
}
