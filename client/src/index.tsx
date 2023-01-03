import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {SkeletonTheme} from 'react-loading-skeleton';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Provider store={store}>
      <SkeletonTheme baseColor="#212121" highlightColor="#303030">
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </SkeletonTheme>
    </Provider>
  );
