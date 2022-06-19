import clientPackageJsonFactory from '../templates/clientPackageJson'

export default {
  generateClientPackageJson(params) {
    console.log(3333, params)

    const clientPackageJsonStr = clientPackageJsonFactory(params)
    console.log(222, clientPackageJsonStr)
  },
}
