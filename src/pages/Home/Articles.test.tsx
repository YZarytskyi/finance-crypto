import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import Articles from './Articles';

test('fetching & displaying article blocks', async () => {
  renderWithProviders(<Articles />);
  expect(await screen.findByText(/Top Articles/i)).toBeInTheDocument();
  expect(await screen.findByText(/Recent Articles/i)).toBeInTheDocument();
});
