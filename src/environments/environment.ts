/*
 * Placeholder. On deploy, the Keshet platform (auth.api) overwrites this file with the app's
 * public MSAL config — same shape, real values. Locally the values are empty, so
 * `msal-config.ts` falls back to the NEXT_PUBLIC_* variables in `.env.local`.
 * Public identifiers only; never put secrets here.
 */
const empty = {
  tenantId: "",
  clientId: "",
  authority: "",
  redirectUri: "",
  postLogoutRedirectUri: "",
  apiScope: "",
};

export const environment = {
  production: false,
  azureAd: empty,
  azureAdProd: empty,
};
