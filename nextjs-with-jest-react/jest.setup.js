// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import EvincedUT, { configure } from '@evinced/unit-tester';

configure({
  serviceAccountId: process.env.SERVICE_ACCOUNT_ID,
  serviceAccountSecret: process.env.AUTH_SECRET,
  // or
  // serviceAccountSecret: process.env.EVINCED_OFFLINE_TOKEN,
  suppressAnonymousAuthenticationWarning: true
})


Object.defineProperty(global, "EvincedUT", {
    value: EvincedUT,
});

