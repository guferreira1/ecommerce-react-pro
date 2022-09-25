import { FunctionComponent } from 'react'

import { Header } from './components/Header/headerComponent'

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return <Header />
}

export default App
