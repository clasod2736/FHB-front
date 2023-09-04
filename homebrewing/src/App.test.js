import { render, screen } from '@testing-library/react';
import {renderWithProviders} from './test/util/reduxMock'
import matchMediaMock from 'jest-matchmedia-mock';
import App from './App';

describe('renders learn react link', () => {

  
  Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // Deprecated
          removeListener: jest.fn(), // Deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
      }))
  });
  

  it("getOldbBrews", () => {
    const { getByRole, getByTestId } = renderWithProviders(<App />);
    const button = Number(screen.getByRole("button", {name: 0}).textContent)
    expect(button).toBe(0)
  })
});
