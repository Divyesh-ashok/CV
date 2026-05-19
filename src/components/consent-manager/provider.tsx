// components/consent-manager/provider.tsx
"use client";

import {
  CookieBanner,
  CookieOptOut,
  CookiePreferences,
  RecallButton,
  createCookieYes,
} from "@cookieyes/nextjs";

createCookieYes()
  .mode("offline")           // or "self-hosted" — see "Self-hosted backend"
  .regulation("GDPR")        // or "CCPA" / "DEFAULT"
  .colorScheme("dark")      // or "dark" / "system"
  .mount();

export function CookieYesRoot() {
  return (
    <>
      <CookieBanner />
      <CookiePreferences />
      <CookieOptOut />        {/* drop this if you don't need CCPA */}
      <RecallButton />
    </>
  );
}
