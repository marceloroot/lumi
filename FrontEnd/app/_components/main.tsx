const Main = ({children}:{children:React.ReactNode}) => {
    return (
        <main className="flex-1 p-8 bg-gray-100">
          {children}
        </main>
      );
}
 
export default Main;