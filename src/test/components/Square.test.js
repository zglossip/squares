import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Square from '../../components/Square';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureMockStore();
const store = mockStore({});

describe('Square component', () => {
    test('renders', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Square></Square>
            </Provider>
        );
        expect(wrapper.exists()).toBe(true);
    });
});