// services/authService.js
export async function fetchUserProfile(accessToken) {
  try {
    const res = await fetch("http://45.64.105.171:8000/userProfile/getUserProfile/", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("fetchUserProfile error:", err);
    return null;
  }
}

export async function fetchEmployerProfile(accessToken) {
  try {
    const res = await fetch("http://45.64.105.171:8000/employerProfile/getEmployerProfile/", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("fetchEmployerProfile error:", err);
    return null;
  }
}
