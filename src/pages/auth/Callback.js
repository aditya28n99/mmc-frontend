import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authConfig } from "../../utils/authConfig";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const state = params.get("state");

      if (!code) {
        console.error("No code found in callback");
        return;
      }

      const codeVerifier = sessionStorage.getItem("code_verifier");
      const selectedProfile = sessionStorage.getItem("selectedProfile");

      if (!codeVerifier) {
        console.error("Missing code_verifier");
        return;
      }

      try {
        const body = new URLSearchParams({
          grant_type: "authorization_code",
          client_id: selectedProfile === "jobseeker" ? "mmc-jobseeker" : "mmc-employer",
          code,
          redirect_uri: authConfig.redirectUri,
          code_verifier: codeVerifier,
        });

        const response = await fetch(authConfig.tokenUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });

        const data = await response.json();
        console.log("Token Response:", data);

        if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
          navigate(selectedProfile === "jobseeker" ? "/jobseeker/home" : "/employer/home");
        } else {
          console.error("Failed to fetch token:", data);
        }
      } catch (err) {
        console.error("Error exchanging code:", err);
      }
    };

    handleCallback();
  }, [navigate]);

  return <p>Processing login...</p>;
};

export default Callback;
