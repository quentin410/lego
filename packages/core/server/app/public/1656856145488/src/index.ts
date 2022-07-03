
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './pages/home';
    
      import dva from 'dva';
      import Model from './models';
      const app = dva();

      app.model(Model);

      app.router(()=> <App/>);

      app.start('#app')
    
    
  