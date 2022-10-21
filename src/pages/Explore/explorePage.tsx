import { FunctionComponent } from 'react'

// Components
import { Header } from '../../components/Header/headerComponent'
import { CategoriesOverview } from '../../components/CategoriesOverview/CategoriesOverview/CategoriesOverviewComponent'

export const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CategoriesOverview />
    </>
  )
}
