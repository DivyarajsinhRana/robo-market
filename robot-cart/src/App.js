import { useEffect , useState } from "react"
import Robot from "./component/pages/Robot";
import Cart from "./component/pages/Cart";
const App = () => {
  return (
    <div>
      <Cart/>
      <Robot />
    </div>
  )
}

export default App