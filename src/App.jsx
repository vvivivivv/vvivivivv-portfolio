import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='*' element={<NotFound />}/>

        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
