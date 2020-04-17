import io from 'socket.io-client'

// localhost
export default io('http://localhost:3000')

// heroku
// export default io('https://yahoot-server.herokuapp.com/')
