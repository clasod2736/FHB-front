import { render, screen } from '@testing-library/react';
// import {renderWithProviders} from '../util/reduxMock'

import { Provider, useSelector } from 'react-redux'
import * as reactRedux from 'react-redux'
import { action } from '../../store/action';

import Intro from '../../components/Intro/Intro'
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import mockAxios from './mockAxios';

import configureStore from 'redux-mock-store';

jest.mock("axios")
jest.mock('react-redux');

describe("rendering right buttons by isLogIn", () => {

    const mockStore = configureStore([]);
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

    beforeEach(() => {
        useSelectorMock.mockClear()
      })

    it('check redering logIn button when isLogIn false', () => {

        const initialState = {
                isLogIn: true,
          };

        useSelectorMock.mockReturnValue(initialState);
          

        const store = configureStore([])(initialState);
        console.log(store)
        
        
        const { getByRole, getByText } = render(
        <Provider store={store}>
            <Router>
                <Intro/>
            </Router>
        </Provider>
        )
        const logInButton = screen.getByRole("button", {name:"Make Last Brew!"});
        expect(logInButton).toBeInTheDocument();
    })

})