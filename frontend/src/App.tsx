

import { Outlet } from 'react-router'
import { Header } from './Shared/Components/index/index'
import { useEffect } from 'react'
import { GetCategoryWithFullProduct } from './Shared/Services/Category'


function App() {
 
  return (
    <main className='min-h-screen'>
      <Header />
      <Outlet />
    </main>
  )
}

export default App
