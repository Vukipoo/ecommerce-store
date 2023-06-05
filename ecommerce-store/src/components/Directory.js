import React from 'react'
import CategoryItem from './CategoryItem'
import './Directory.styles.scss'

function Directory({ categories }) {
  return (
    <div className="categories-container">
    {categories.map(( category ) => (
     <CategoryItem key={category.id} category ={category} />
    ))}

  </div>
  )
}

export default Directory