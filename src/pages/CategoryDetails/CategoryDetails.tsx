import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'

// Components
import { CategoryDetails } from '../../components/CategoryDetailsComponent/CategoryDetailsComponent'
import { Header } from '../../components/Header/headerComponent'

export const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  )
}
