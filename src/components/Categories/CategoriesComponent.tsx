import { useEffect, useState } from 'react'
import axios from 'axios'

// Utilities
import Category from '../../types/categoryTypes'
import env from '../../config/env.config'

// Styles
import './CategoriesStyles.css'

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}api/category`)

      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  console.log({ categories })

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="categories-container">
      <div className="categories-content"></div>
    </div>
  )
}
