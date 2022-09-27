import { useEffect, useState } from "react";

import { ListTransaksi } from "./ListTransaksi";
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
  const [page, setPage] = useState("list");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showTable");
        } else {
          entry.target.classList.remove("showTable");
        }
      });
    });
    const hiddenElement = document.querySelectorAll(".fadedTable");
    hiddenElement.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
  return page === "list" ? <ListTransaksi setPage={setPage} /> : <></>;
}
