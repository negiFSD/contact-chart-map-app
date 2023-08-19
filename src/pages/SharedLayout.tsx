import Navbar from '@/components/main/Navbar'
import { Sidebar } from '@/components/main/sidebar'
import { Outlet } from 'react-router-dom'

function SharedLayout() {
  return (
    <>
    <Navbar/>
    <div className='flex '>
    <Sidebar/>
    <Outlet/>
    </div>

    </>
  )
}

export default SharedLayout