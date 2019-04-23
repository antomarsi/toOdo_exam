import React from 'react';
import ReactDOM from 'react-dom';

import configureStore, { IAppState } from './Store';
import { Store } from 'redux';

import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { getAllTodos, addTodos } from './actions/TodoActions';

interface IProps {
    store: Store<IAppState>;
}

const Root: React.SFC<IProps> = props => {
    return (
        <Provider store={props.store}>
            <App/>
        </Provider>
    );
}

const store = configureStore();
store.dispatch(getAllTodos());
store.dispatch(addTodos());

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

serviceWorker.unregister();
