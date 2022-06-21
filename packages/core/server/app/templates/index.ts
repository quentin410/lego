export default (params) => {
  const { stateLib } = params
  return `
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './pages/home';
    ${
      stateLib === 'dvaJs'
        ? `
      import dva from 'dva';
      import Model from './models';
      const app = dva();

      app.model(Model);

      app.router(()=> <App/>);

      app.start('#app')
    `
        : ''
    }
    ${stateLib === 'none' ? `ReactDOM.render(document.getElementById('#app'), App)` : ''}
  `
}
