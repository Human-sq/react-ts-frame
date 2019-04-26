import * as React from "react";
// import 'whatwg-fetch';

import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import './assets/less/index.less';
import App from './components/index';

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/index', () => {
    render(App);
  });
}
