import { Controller } from 'egg'
import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
export default class ProjectsController extends Controller {
  public async create() {
    const { ctx } = this
    const params = ctx.request.body
    const { uiFramework, nodeFramework, ts } = params

    // generate folder for build result
    const folderName = String(Date.now())
    const folderPathName = join(__dirname, `../public/${folderName}`)
    const suffix = ts ? 'ts' : 'js'
    mkdirSync(folderPathName)
    if (uiFramework !== 'none') {
      const clientPackageJsonStr = ctx.helper.generateClientPackageJson(params)
      writeFileSync(`${folderPathName}/package.json`, clientPackageJsonStr)
      if (nodeFramework === 'none') {
        mkdirSync(`${folderPathName}/src`)
        mkdirSync(`${folderPathName}/src/models`)
        mkdirSync(`${folderPathName}/src/pages`)
        mkdirSync(`${folderPathName}/src/pages/home`)
      }
      const dvaModelStr = ctx.helper.generateDvaModel()
      writeFileSync(`${folderPathName}/src/models/index.${suffix}`, dvaModelStr)
      const homePageStr = ctx.helper.generateHomePage(params)
      writeFileSync(`${folderPathName}/src/pages/home/index.${suffix}`, homePageStr)
      const indexStr = ctx.helper.generateIndex(params)
      writeFileSync(`${folderPathName}/src/index.${suffix}`, indexStr)
    }
    if (nodeFramework !== 'none') {
    }
    ctx.body = {}
  }
}
