import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import axios from 'axios'
export const useCatStore = defineStore('catStore', () => {
  //header for axios x-api-key
  // const BASE_URL = 'http://192.168.0.120/imgUploader/public/'
  const BASE_URL = 'https://desarrollogaren.000webhostapp.com/imgUploader/public/'
  const API_KEY =
    'live_ObalGqySYbvel2M4m7EmM8ZCP8wXPEQU5AweCqeIJgRVyiNBagAbqyV1gtz5G5oV'
  const catBreeds = reactive([
    { breeds: [] },
    { images: [] },
    { listOfBreeds: [] },
  ])
  const dataForBreed = reactive([{ principalImage: '' }, { arrayOfImages: [] }])
  const topSearch = ref([])
  const getAllBreeds = async () => {
    const PATH = `${BASE_URL}api/getAllBreeds`
    try {
      const response = await axios.get(PATH)
      const data = response.data
      console.log(data)
      if (data.status) {
        localStorage.setItem('catData', JSON.stringify({data: data}))
        checkLocalStorage()
        console.log({ catBreeds })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkLocalStorage = async () => {
    if (localStorage.getItem('catData') === null) {
      await getAllBreeds()
    } else {
      const data = JSON.parse(localStorage.getItem('catData'))
      // console.log(data)
      catBreeds.breeds = data.breeds
      catBreeds.images = data.imagenes
      catBreeds.listOfBreeds = data.breedInfo
    }
  }

  const getBreedImage = async (breedID, idLotImages) => {
    const datos = new FormData()
    datos.append('idLotImages', idLotImages)
    datos.append('breedID', breedID)
    const PATH = `${BASE_URL}api/getBreedImage`
    try {
      const response = await axios.post(PATH, datos)
      const data = response.data
      console.log({ data })
      if (!data.status) {
        return
      }
      dataForBreed.principalImage = data.imageUrl
      dataForBreed.arrayOfImages = data.lotImages
    } catch (error) {
      console.log(error)
    }
  }
  const getTopSearch = async (idImages) => {
    const PATH = `${BASE_URL}api/getTopSearch`
    try {
      const response = await axios.post(PATH, { idImages })
      const data = response.data
      console.log(data)
      if (data.status) {
        topSearch.value = data.topSearchImages
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getTopSearch,
    catBreeds,
    getAllBreeds,
    checkLocalStorage,
    getBreedImage,
    dataForBreed,
    topSearch,
  }
})
