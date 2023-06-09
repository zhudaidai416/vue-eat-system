import axios from 'axios'
const instance = axios.create({

  // baseURL:"http://43.143.46.141:1002",
  // baseURL:"http://127.0.0.1:4523/m1/1737682-0-default",
  // baseURL:"http://162.14.105.128:2001",
  baseURL:"http://42.193.23.188:3003",

  timeout: 5000,
  header: {},

	/* baseURL:"http://43.143.46.141:1002", */
  // baseURL:"http://43.142.110.185:4001",
	baseURL: 'http://43.143.46.141:1003',
	// baseURL:"http://127.0.0.1:4523/m1/1737682-0-default",
	/* baseURL:"http://162.14.105.128:2001", */
	timeout: 5000,
	header: {},
})

//响应拦截
instance.interceptors.response.use(response => {
	return Promise.resolve(response.data)
})
export default instance
