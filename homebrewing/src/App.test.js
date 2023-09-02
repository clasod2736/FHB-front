import { render, screen } from '@testing-library/react';
import {renderWithProviders} from './test/util/utils-for-tests'
import matchMediaMock from 'jest-matchmedia-mock';
import App from './App';

test('renders learn react link', () => {
  
  renderWithProviders(<App />);
});
