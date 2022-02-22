// ** Axios Imports
import axios from 'axios'

//** Sweet Alerts Imports
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const errorNotice = (response) => {
  if (!response) { return }
  return MySwal.fire({
    title: `Error ${!response ? 'Unknown' : response.status}!`,
    text: `${!response ? 'An unknown error has occurred' : response.statusText}`,
    icon: 'error',
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  })
} 

// ** Set api Base URL by env variable

const url = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  } else {
    return process.env.REACT_APP_API_URL
  }
} 
axios.defaults.baseURL = url()

//Item Fetch Requests

export const getItem = (...args) => new Promise((resolve, reject) => {
  return axios.get(`/items/:id`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

//Recipe Fetch Requests

export const getRecipes = (...args) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipes`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

export const getHandlerRecipesById = (id, page, limit, ...args) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipes/${id}?searchType=handler&page=${page}&perPage=${limit}`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

export const getItemRecipesByID = (id, page, limit, handler, ...args) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipes/${id}?searchType=item&page=${page}&perPage=${limit}&handler=${handler}`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

export const getHandlerInfo = (id, ...args) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipe_types/${id}`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

export const getItemInfo = (id, ...args) => new Promise((resolve, reject) => {
  return axios.get(`/api/items/${id}`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})

export const getAllRecipeTypes = (...args) => new Promise((resolve, reject) => {
  return axios.get(`/api/recipes`, {...args})
  .then((res) => resolve(res))
  .catch((err) => {
    const { response } = err
    errorNotice(response)
    reject(response)
  })
})