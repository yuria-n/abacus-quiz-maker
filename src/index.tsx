import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '../node_modules/@material-ui/core';

import { App } from '@containers';
import store from '@store';
import { theme } from '@utils';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store as any}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
