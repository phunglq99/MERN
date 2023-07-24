import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers';
import mySaga from './redux/sagas';
import App from './App.jsx';
// import './index.css'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(mySaga);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
