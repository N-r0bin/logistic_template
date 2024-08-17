import React from 'react';
import './App.css';
import RoutesMain from './routes/RoutesMain';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <>
    <ReduxProvider store={store}>    <RoutesMain/></ReduxProvider>

    </>
  );
}

export default App;
