const apiApartmentsURL = "api/units";

export async function getResidentByUnitId(UnitId) {
  const TrxResponse = await fetch(
    apiApartmentsURL + "/" + UnitId + "?_embed=transactions",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("authorization"),
      },
      method: "GET",
    }
  );

  //   const result = TrxResponse.json();

  //   const ResidentResponse = await fetch(
  //     apiApartmentsURL + "/" + result.transactions.id + "?expand=resident",
  //     {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: localStorage.getItem("authorization"),
  //       },
  //       method: "GET",
  //     }
  //   );

  return TrxResponse.json();
}
