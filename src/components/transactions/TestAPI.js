import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartment, fetchApartments } from "../../reducer/apartment-slice";
import { fetchResidents } from "../../reducer/resident-slice";
import { useEffect } from "react";
import { fetchResidentByUnitId } from "../../reducer/resident-slice";

export function TestAPI() {
  const dispatch = useDispatch();
  const state = useSelector((storedState) => storedState.residents);

  useEffect(() => {
    dispatch(fetchResidentByUnitId(3));
  }, []);
  console.log(state.residents);
  if (!state.isLoading) {
    return <p>{state.residents.id}</p>;
  }
}
