import {renderWithProviders} from './test/util/reduxMock'
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
    const view = renderWithProviders(<App />);
    expect(view).toMatchSnapshot();
    // const button = Number(screen.getByRole("button", {name: 0}).textContent)
    // expect(button).toBe(0)
  })
});
