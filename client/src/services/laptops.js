import api from './apiConfig'

export const getLaptops = async () => {
  try {
      const response = await api.get('/laptops')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getLaptop = async id => {
  try {
      const response = await api.get(`/laptops/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createLaptop = async laptop => {
  try {
      const response = await api.post('/laptops', laptop)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateLaptop = async (id, laptop) => {
  try {
      const response = await api.put(`/laptops/${id}`, laptop)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteLaptop = async id => {
  try {
      const response = await api.delete(`/laptops/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}