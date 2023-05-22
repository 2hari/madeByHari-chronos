import { useEffect, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import Header from "./components/Header"

function App() {
  const [navMobile, setNavMobile] = useState(false)
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    })
  })
  return (
    <>
      <div className="overflow-hidden">
        <Header setNavMobile={setNavMobile} />
      </div>
    </>
  )
}

export default App
