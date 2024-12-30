import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "Expired!!!!!";
  }

  return token;
}

export function tokenLoader() {
  try {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');

    if (!token || !expiration) {
      console.error("Token or expiration missing");
      return null;
    }

    if (new Date(expiration) <= new Date()) {
      console.error("Token expired");
      return "Expired!!!!!";
    }

    return token;
  } catch (error) {
    console.error("Error in tokenLoader:", error);
    throw error; // Isso levará à página de erro
  }
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}