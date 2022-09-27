const apiApartmentsURL = "api/units";

export async function getAllApartments() {
  const response = await fetch(apiApartmentsURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("authorization"),
    },
    method: "GET",
  });

  return response.json();
}

export async function getApartment(id) {
  const response = await fetch(`${apiApartmentsURL}/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("authorization"),
    },
    method: "GET",
  });

  return response.json();
}

export async function createApartments(unit) {
  const response = await fetch(apiApartmentsURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("authorization"),
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
      Authorization: localStorage.getItem("authorization"),
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
      Authorization: localStorage.getItem("authorization"),
    },
    method: "PUT",
    body: JSON.stringify(unit),
  });

  return response.json();
}
