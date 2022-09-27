const apiTransactionsURL = "api/transactions";

export async function getAllTransactions() {
  const response = await fetch(apiTransactionsURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("authorization"),
    },
  });
  //   console.log(response.json());
  return response.json();
}

export async function createTransactions(trx) {
  const response = await fetch(apiTransactionsURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("authorization"),
    },
    method: "POST",
    body: JSON.stringify(trx),
  });

  return response.json();
}

export async function deleteTransactions(trx) {
  const response = await fetch(apiTransactionsURL + "/" + trx.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("authorization"),
    },
    method: "DELETE",
    // body: JSON.stringify(guest),
  });

  return response.json();
}

export async function updateTransactions(trx) {
  const response = await fetch(apiTransactionsURL + "/" + trx.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("authorization"),
    },
    method: "PUT",
    body: JSON.stringify(trx),
  });

  return response.json();
}
