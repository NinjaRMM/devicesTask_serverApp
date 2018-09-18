import bodyParser from 'body-parser'
import morgan from 'morgan'

module.exports = app => {
  app.set('port', process.env.PORT || 3000)
  app.set('json spaces', 4)

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  app.use(morgan('dev'));
}