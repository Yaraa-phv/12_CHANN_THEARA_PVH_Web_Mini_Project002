import WorkspaceBoard from "@/components/WorkspaceBoard";

export default async function WorkspaceLayout({children}) {
  
  return(
    <>
    <html lang="en">
            <body>
              {children}
            </body>
          </html>
    </>
  )

}