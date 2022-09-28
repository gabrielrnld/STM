const apiApartmentsURL = "api/units";

export async function getTrxByUnitId(UnitId) {
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
  return TrxResponse.json();
}
export async function getResidentByUnitIdApi(getTrx) {
  const result = getTrx();
  console.log(result);

  const ResidentResponse = await fetch(
    apiApartmentsURL + "/" + result.transactions.id + "?_expand=resident",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("authorization"),
      },
      method: "GET",
    }
  );
  return ResidentResponse.json();
}
