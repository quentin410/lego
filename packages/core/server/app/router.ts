import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  router.resources('projects', '/api/projects', app.controller.projects)
  router.get('/', controller.home.index)
}
