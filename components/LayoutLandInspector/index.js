import React from 'react'
import Header from '../Header'
import SidebarLandInspector from '../SidebarLandInspector'

const Layout = ({children}) => {
  return (
    <div>
          <div className="px-10 bg-[#f2f2f2f7] h-screen">
       <div className="py-2">
       <Header/>
       </div>
        <main className="w-full  flex  h-[calc(100%-4rem)]">
          <aside className=" md:hidden lg:flex h-full w-2/5 lg:w-1/4 xl:w-[348px]  min-w-fit hidden ">
            <SidebarLandInspector  />
          </aside>
          <aside className="w-full lg:w-9/12 2xl:w-full h-full overflow-auto bg-[#fbfaf9]">
            {children}
          </aside>
        </main>
      </div>
    </div>
  )
}

export default Layout