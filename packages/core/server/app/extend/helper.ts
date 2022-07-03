import clientPackageJsonFactory from '../templates/client/packageJson'
import dvaModelFactory from '../templates/client/dvaModel'
import homePageFactory from '../templates/client/homePage'
import indexFactory from '../templates/client/index'
import clientEslintFactory from '../templates/client/eslintrc'
import clientPrettierFactory from '../templates/client/prettier'
import clientGitignoreFactory from '../templates/client/gitignore'
import clientIndexHtmlFactory from '../templates/client/indexHtml'

export default {
  generateClientPackageJson(params) {
    const clientPackageJsonStr = clientPackageJsonFactory(params)
    return clientPackageJsonStr
  },
  generateDvaModel() {
    const dvaModelStr = dvaModelFactory()
    return dvaModelStr
  },
  generateHomePage(params) {
    const homePageStr = homePageFactory(params)
    return homePageStr
  },
  generateIndex(params) {
    const indexStr = indexFactory(params)
    return indexStr
  },
  generateClientEslint(params) {
    const clientEslintStr = clientEslintFactory(params)
    return clientEslintStr
  },
  generateClientPrettier() {
    const clientPrettierStr = clientPrettierFactory()
    return clientPrettierStr
  },
  generateClientGitignore() {
    const clientGitignoreStr = clientGitignoreFactory()
    return clientGitignoreStr
  },
  generateClientIndexHtml() {
    const clientIndexHtmlStr = clientIndexHtmlFactory()
    return clientIndexHtmlStr
  },
}
