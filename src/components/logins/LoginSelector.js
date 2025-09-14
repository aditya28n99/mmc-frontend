import { useState } from "react";
import { generatePKCECodes } from "../../utils/pkce";
import { authConfig } from "../../utils/authConfig";

const LoginSelector = () => {
  const [open, setOpen] = useState(false);

  const handleLogin = async (role) => {
    const { codeVerifier, codeChallenge } = await generatePKCECodes();

    console.log("PKCE Code Verifier:", codeVerifier);
    console.log("PKCE Code Challenge:", codeChallenge);
    console.log("Selected Profile:", role);

    sessionStorage.setItem("code_verifier", codeVerifier);
    sessionStorage.setItem("selectedProfile", role);

    const baseUrl =
      role === "jobseeker"
        ? authConfig.jobseekerLoginUrl
        : authConfig.employerLoginUrl;

    const loginUrl = `${baseUrl}?redirect_uri=${encodeURIComponent(
      authConfig.redirectUri
    )}&code_challenge=${codeChallenge}&code_challenge_method=S256`;

    console.log("Redirecting to:", loginUrl);
    window.location.href = loginUrl;
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Login
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
          <button
            onClick={() => handleLogin("jobseeker")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Login as Jobseeker
          </button>
          <button
            onClick={() => handleLogin("employer")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Login as Employer
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginSelector;
