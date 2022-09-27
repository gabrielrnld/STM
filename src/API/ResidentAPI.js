const apiResidentsURL = "api/residents";

export async function getAllResidents() {
  const response = await fetch(apiResidentsURL);

  return response.json();
}

export async function createResidents(resident) {
  const response = await fetch(apiResidentsURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(resident),
  });

  return response.json();
}

export async function deleteResidents(resident) {
  const response = await fetch(apiResidentsURL + "/" + resident.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
    // body: JSON.stringify(guest),
  });

  return response.json();
}

export async function updateResidents(resident) {
  const response = await fetch(apiResidentsURL + "/" + resident.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(resident),
  });

  return response.json();
}
