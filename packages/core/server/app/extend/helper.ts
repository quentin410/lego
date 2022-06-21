import clientPackageJsonFactory from '../templates/clientPackageJson'
import dvaModelFactory from '../templates/dvaModel'
import homePageFactory from '../templates/homePage'
import indexFactory from '../templates/index'

export default {
  generateClientPackageJson(params) {
    const clientPackageJsonStr = clientPackageJsonFactory(params)
    console.log('clientPackageJsonStr', clientPackageJsonStr)
  },
  generateDvaModel() {
    const dvaModelStr = dvaModelFactory()
    console.log('dvaModelStr', dvaModelStr)
  },
  generateHomePage(params) {
    const homePageStr = homePageFactory(params)
    console.log('homePageStr', homePageStr)
  },
  generateIndex(params) {
    const indexStr = indexFactory(params)
    console.log('indexStr', indexStr)
  },
}
