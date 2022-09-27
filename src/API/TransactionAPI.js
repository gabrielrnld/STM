const apiTransactionsURL = "http://localhost:3344/transactions";

export async function getAllTransactions() {
  const response = await fetch(apiTransactionsURL);

  return response.json();
}

export async function createTransactions(resident) {
  const response = await fetch(apiTransactionsURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(resident),
  });

  return response.json();
}

export async function deleteTransactions(resident) {
  const response = await fetch(apiTransactionsURL + "/" + resident.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
    // body: JSON.stringify(guest),
  });

  return response.json();
}

export async function updateTransactions(resident) {
  const response = await fetch(apiTransactionsURL + "/" + resident.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(resident),
  });

  return response.json();
}
