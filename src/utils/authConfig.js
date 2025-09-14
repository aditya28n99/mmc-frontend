export const authConfig = {
  // Start login with Spring Boot OAuth2 endpoints
  jobseekerLoginUrl: "http://www.makemycrew.com:9000/oauth2/authorization/mmc-jobseeker",
  employerLoginUrl: "http://www.makemycrew.com:9000/oauth2/authorization/mmc-employer",

  // This must be the frontend’s callback route, not backend internal path
  redirectUri: "http://localhost:3000/callback",

  // Token endpoint is always from Keycloak (not Spring Boot)
  tokenUrl: "http://www.makemycrew.com:8080/realms/mmc/protocol/openid-connect/token",
};
