import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    const host = 'http://127.0.0.1:3000'
    ctx.body = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <script type="module" src="${host}/@vite/client"></script>
          <script type="module">
      import RefreshRuntime from "${host}/@react-refresh"
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
      </script>

          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="${host}/src/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Lego App</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" src="${host}/src/main.tsx"></script>
        </body>
      </html>
    `
  }
}
