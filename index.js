import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import axios from 'axios'
import App from './App'

// Generate a unique token for storing your bookshelf data on the backend server.
//let token = localStorage.token
//if (!token) {
    const token = /*localStorage.token =*/ Math.random().toString(36).substr(-8)
//}


axios.defaults.baseURL = 'https://reactnd-books-api.udacity.com'
axios.defaults.headers.common['Authorization'] = token
axios.defaults.headers.post['Content-Type'] = 'application/json'

AppRegistry.registerComponent(appName, () => App)
