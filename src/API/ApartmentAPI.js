const apiApartmentsURL = "http://localhost:3344/units";

export async function getAllApartments() {
  const response = await fetch(apiApartmentsURL);

  return response.json();
}

export async function createApartments(unit) {
  const response = await fetch(apiApartmentsURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(unit),
  });

  return response.json();
}

export async function deleteApartments(unit) {
  const response = await fetch(apiApartmentsURL + "/" + unit.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
    // body: JSON.stringify(guest),
  });

  return response.json();
}

export async function updateApartments(unit) {
  const response = await fetch(apiApartmentsURL + "/" + unit.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(unit),
  });

  return response.json();
}
