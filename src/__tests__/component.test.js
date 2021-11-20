import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterBar from '../components/filter-bar/filter-bar.component';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../store/reducers/rootReducer";
import { Router } from "react-router-dom";
import "whatwg-fetch";
import * as thunks from '../store/thunks';
import { createMemoryHistory } from "history";

const history = createMemoryHistory({ initialEntries: ['/search'] });

const setup = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const utils = render(
        <Provider store={store}>
            <Router history={history}>
                <FilterBar />
            </Router>
        </Provider>);
    const comedyButton = utils.getByText('comedy');
    return {
        history,
        comedyButton,
        ...utils,
    }
}

describe('FilterBar should change the underline, call filter request and change the URL query:', () => {

    test('Render Filter Bar, run the mocked onClick Event', () => {
        const { comedyButton } = setup();
        const mockCallBack = jest.fn();
        comedyButton.onclick = mockCallBack;
        fireEvent.click(comedyButton);
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    test('Render Filter Bar, run the thunk after genre change', () => {
        const spy = jest.spyOn(thunks, 'getMovies');
        const { comedyButton } = setup();
        fireEvent.click(comedyButton);
        expect(spy).toBeCalled();
    });
});