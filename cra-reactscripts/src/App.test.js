import { render, screen } from '@testing-library/react';
import App from './App';
import EvincedUT, { configure } from '@evinced/unit-tester';

configure({
  serviceAccountId: process.env.SERVICE_ACCOUNT_ID,
  // serviceAccountSecret: process.env.API_KEY,
  serviceAccountSecret: process.env.UT_JWT,
  suppressAnonymousAuthenticationWarning: true
})

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const results = await EvincedUT.analyzeLink(linkElement);
  console.log("results: ", results);
});
