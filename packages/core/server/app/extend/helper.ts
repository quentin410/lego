import clientPackageJsonFactory from '../templates/clientPackageJson'
import dvaModelFactory from '../templates/dvaModel'
import homePageFactory from '../templates/homePage'
import indexFactory from '../templates/index'

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
}
