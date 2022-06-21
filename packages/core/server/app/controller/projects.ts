import { Controller } from 'egg'

export default class ProjectsController extends Controller {
  public async create() {
    const { ctx } = this
    console.log(111, ctx.request.body)
    const params = ctx.request.body
    const { uiFramework, nodeFramework } = params
    if (uiFramework !== 'none') {
      ctx.helper.generateClientPackageJson(params)
      ctx.helper.generateDvaModel()
      ctx.helper.generateHomePage(params)
      ctx.helper.generateIndex(params)
    }
    if (nodeFramework !== 'none') {
    }
    ctx.body = {}
  }
}
