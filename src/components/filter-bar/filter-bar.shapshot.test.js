import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "../../store/reducers/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";

import FilterBar from '../filter-bar/filter-bar.component';

describe('Should render components properly:', () => {
    const store = createStore(rootReducer);

    test('render filter bar', () => {
        const { asFragment } = render(<Provider store={store}><Router><FilterBar /></Router></Provider>);
        expect(asFragment(<FilterBar />)).toMatchSnapshot();
    });
});