const apiLoginURL = "../api/login";

export async function loginUser(credential) {
  const response = await fetch(apiLoginURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(credential),
  });
  return response.json();
}
