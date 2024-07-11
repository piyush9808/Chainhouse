// @/components/Layout/index.js
import React, { useState } from "react";
import Head from "next/head";
import Sidebar from "../Sidebar";
import Header from "../Header";
// import MenuBarMobile from './MenuBarMobile';

export default function Layout({ pageTitle, children }) {
  
  let titleConcat = "Responsive Sidebar Example";
  if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="px-10  h-screen">
       <div className="py-2">
       <Header/>
       </div>
        <main className="w-full  flex  h-[calc(100%-4rem)]">
          <aside className=" md:hidden lg:flex h-full w-2/5 lg:w-1/4 xl:w-[348px]  min-w-fit hidden ">
            <Sidebar show={showSidebar} setter={setShowSidebar} />
          </aside>
          <aside className="w-full lg:w-9/12 2xl:w-full h-full overflow-auto bg-[#fbfaf9]">
            {children}
          </aside>
        </main>
      </div>
    </>
  );
}
