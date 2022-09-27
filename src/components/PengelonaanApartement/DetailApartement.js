import React from "react";
import { Button } from "react-bootstrap";

export default function DetailApartement(props) {
  const { selected, switchToList, setSelected } = props;

  const handleToListPage = () => {
    switchToList("list");
    setSelected(null);
  };

  return (
    <>
      <Button onClick={handleToListPage}>Back</Button>
      <ul>
        <li>Furnished : {selected.unit?.furnished ? `Yes` : `No`}</li>
        <li>Balcony : {selected.unit?.balcony ? `Yes` : `No`}</li>
        <li>
          Resident :{" "}
          {selected.findResident
            ? `${selected.findResident.fullname} | | ${selected.unit.id} | ${selected.unit.floor} | ${selected.unit.unitCode} | ${selected.unit.status} | IDR
          ${selected.unit.sellPrice} | IDR ${selected.unit.rentPrice} | ${selected.unit.rentSchema} | - Rooms: ${selected.unit.rooms}`
            : `(none)`}
        </li>
        <li>
          <Button>Manage</Button>
        </li>
      </ul>
    </>
  );
}
