

import Sidebar from "@/components/sidebar";
import "../globals.css";
import { getWorkspaces } from "../../../service/api-service";
import TopNav from "@/components/topnav";

export default async function DashboardLayout({ children }) {

  // const workspace = await getWorkspaces();
  // const favorite = await setFavoriteStatus();

  return (
    <>
      <html lang="en">
        <body>
          <div className="flex h-screen bg-gray-50">
            <Sidebar  />
            <div className="flex-1 flex flex-col">
              <TopNav />
              <main className="flex-1 overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </body>
      </html>
    </>

    // <html lang="en">
    //   <body className="text-charcoal w-full h-screen flex">
    //   <div className="container w-[20%] h-[100%]">
    //       <div className="h-[15%] text-center py-10">
    //         <Logo />
    //       </div>

    //       <div className="h-[75%] ">
    //         {/* <SideBarComponent /> */}
    //       </div>

    //       <div className="h-[10%] text-center pt-3">
    //         <button type="button" class="text-gray-900 border-black gap-3 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
    //           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M17.9167 10.8334V12.7167C17.9167 16.4417 16.425 17.9334 12.7 17.9334H12.5917C9.24165 17.9334 7.69999 16.725 7.42499 13.775" stroke="#009990" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //             <path d="M7.41669 6.29995C7.67502 3.29995 9.21669 2.07495 12.5917 2.07495H12.7C16.425 2.07495 17.9167 3.56662 17.9167 7.29162" stroke="#009990" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //             <path d="M12.5 10H3.01666" stroke="#009990" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //             <path d="M4.87498 7.20837L2.08331 10L4.87498 12.7917" stroke="#009990" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //           </svg>
    //           Logout
    //         </button>
    //       </div>

    //     </div>
    //     <div className=" w-[80%] h-[100%]">
    //       {children}
    //     </div>
    //   {/* </div> */}




    //   </body>
    // </html>
  );
}
