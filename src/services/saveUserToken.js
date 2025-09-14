// services/saveUserToken.js
export async function saveUserToken(accessToken, profileType) {
  const url =
    profileType === "employer"
      ? "http://45.64.105.171:8000/employerProfile/createWithToken/"
      : "http://45.64.105.171:8000/userProfile/createWithToken/";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessToken }),
    });

    if (!res.ok) {
      console.error("saveUserToken failed:", await res.text());
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("saveUserToken error:", err);
    return null;
  }
}
