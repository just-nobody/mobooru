import {resolve} from 'path'

export default {
  server: {
    port: +process.env.PORT || 8080,
  },
  db: {
    url: 'mongodb://localhost:27017',
  },
  paths: {
    web: resolve(__dirname, '../web'),
    data: resolve(__dirname, '../../data'),
  }
}