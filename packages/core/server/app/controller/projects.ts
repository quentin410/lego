import { execSync } from 'child_process'
import { Controller } from 'egg'
import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

export default class ProjectsController extends Controller {
  public async create() {
    const { ctx } = this
    const params = ctx.request.body
    const { uiFramework, nodeFramework, ts, clientDepsAutoInstall, serverDepsAutoInstall, clientEslint, stateLib, clientPrettier } = params

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
      if (stateLib === 'dvaJs') {
        const dvaModelStr = ctx.helper.generateDvaModel()
        writeFileSync(`${folderPathName}/src/models/index.${suffix}`, dvaModelStr)
      }
      if (clientEslint) {
        const clientEslintStr = ctx.helper.generateClientEslint(params)
        writeFileSync(`${folderPathName}/.eslintrc`, clientEslintStr)
      }
      if (clientPrettier) {
        const clientPrettierStr = ctx.helper.generateClientPrettier()
        writeFileSync(`${folderPathName}/.prettierrc`, clientPrettierStr)
      }

      const homePageStr = ctx.helper.generateHomePage(params)
      writeFileSync(`${folderPathName}/src/pages/home/index.${suffix}x`, homePageStr)

      const indexStr = ctx.helper.generateIndex(params)
      writeFileSync(`${folderPathName}/src/index.${suffix}`, indexStr)

      const clientGitignoreStr = ctx.helper.generateClientGitignore()
      writeFileSync(`${folderPathName}/.gitignore`, clientGitignoreStr)

      const clientIndexHtmlStr = ctx.helper.generateClientIndexHtml()
      writeFileSync(`${folderPathName}/index.html`, clientIndexHtmlStr)

      if (clientDepsAutoInstall) {
        execSync(`cd ${folderPathName} && yarn`)
      }
    }
    if (nodeFramework !== 'none') {
      if (serverDepsAutoInstall) {
        // execSync('yarn')
      }
    }
    ctx.body = {}
  }
}
