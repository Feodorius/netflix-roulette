import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "../store/reducers/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";

import FilterBar from '../components/filter-bar/filter-bar.component';
import Search from "../components/search/search.component";
import AddEditDialog from "../components/add-edit-dialog/add-edit-dialog.component";

describe('Should render components properly:', () => {
    const store = createStore(rootReducer);

    test('render filter bar', () => {
        const { asFragment } = render(<Provider store={store}><Router><FilterBar /></Router></Provider>);
        expect(asFragment(<FilterBar />)).toMatchSnapshot();
    });
    test('render search panel', () => {
        const { asFragment } = render(<Provider store={store}><Router><Search /></Router></Provider>);
        expect(asFragment(<Search />)).toMatchSnapshot();
    });
    test('render Add/Edit Dialog', () => {
        const { asFragment } = render(<Provider store={store}><Router><AddEditDialog /></Router></Provider>);
        expect(asFragment(<AddEditDialog />)).toMatchSnapshot();
    });
});