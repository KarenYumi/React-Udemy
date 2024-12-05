export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Ops, algo falhou ?-?")
  }

  return resData.places;
};

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Ops, algo falhou ao fazer o fetch ?-?")
  }

  return resData.places;
};

export async function updatedUserPlaces(places){
  const response = await fetch("http://localhost:3000/user-places", {
    method:"PUT",
    body: JSON.stringify({places}),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const resData = await response.json();

  if(!response.ok){
    throw new Error("Falha no update do user");
  }

  return resData.message;
}

