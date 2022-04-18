import { getDevices, addDevice, getDevice, updateDevice, deleteDevice } from '../controllers/devices'
import { getInstallerInfo } from '../controllers/install'

module.exports = app => {
  app.route('/devices')
    .get(getDevices)
    .post(addDevice)

  app.route('/devices/:id')
    .get(getDevice)
    .put(updateDevice)
    .delete(deleteDevice)

  app.route('/installer')
    .get(getInstallerInfo(app))
}