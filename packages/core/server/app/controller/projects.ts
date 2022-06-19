import { Controller } from 'egg'

export default class ProjectsController extends Controller {
  public async create() {
    const { ctx } = this
    console.log(111, ctx.request.body)
    const params = ctx.request.body
    const { uiFramework, nodeFramework } = params
    if (uiFramework !== 'none') {
      ctx.helper.generateClientPackageJson(params)
    }
    if (nodeFramework !== 'none') {
    }
    ctx.body = {}
  }
}
