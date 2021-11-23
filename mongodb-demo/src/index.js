const App = require('@ppzp/resh-alifc')
const model = require('./model')
const controllers = require('./controller')

const app = new App({
  async init() {
    try {
      await model.client.connect()
      model.Log.info('mongo 连接建立成功')
    } catch(e) {
      model.Log.error('mongo 连接建立失败', e)
    }
  }
})

app.router.setChildren(controllers)

module.exports = app