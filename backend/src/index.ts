import { app, server } from './app'

async function main() {
  try {
    server.listen(app.get('port'))
    console.log(`Server on port ${app.get('port')}`)
  } catch (e) {
    console.error(e)
  }
}

main()
