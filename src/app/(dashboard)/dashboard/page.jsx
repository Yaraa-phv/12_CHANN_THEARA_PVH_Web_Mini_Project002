
// import Breadcrumbs from "@/components/Breadcrumb";
// import Counter from "@/components/header";
// import { auth } from "../../../../auth";

import { redirect } from "next/navigation";
import { auth } from "../../../../auth"

export default async function HomePage() {

//   const session = await auth();
//   // console.log("session : ", session.token.payload);

//   console.log("session : ", session);

// // Check if session and token exist before accessing payload
// if (!session || !session.payload.token) {
//   console.error("Session or token is undefined");
//   redirect("/login");
//   return;
// }

// // console.log("session payload: ", session.token.payload);

// //   if(!session.token){
// //     redirect("/login")
// //   }
//   // const session = await auth();
//   // console.log("session : ", session);

  return (

    <>
      <div className="w-full h-[100%]">
        <div className="h-[10%] bg-red-900">
          <div>
            Hiiiii
          {/* <Breadcrumbs /> */}
          </div>
          <div>

          </div>
        </div>
        <div className="h-[90%] bg-yellow-200">

        </div>
      </div>
    </>
  )
}