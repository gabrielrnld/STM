import { useEffect, useState } from "react";

import { ListTransaksi } from "./ListTransaksi";
export function Transaksi(props) {
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
