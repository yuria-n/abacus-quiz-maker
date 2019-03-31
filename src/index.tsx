import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { App } from '@containers';
import store, { Store } from '@store';
import { theme } from '@utils';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store as Store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
