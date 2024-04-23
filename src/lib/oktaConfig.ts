export const oktaConfig = {
  clientId: "0oagmrh7wbbUyTEvM5d7",
  issuer: "https://dev-69663998.okta.com/oauth2/default",
  redirectUri: "http://localhost:5000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
