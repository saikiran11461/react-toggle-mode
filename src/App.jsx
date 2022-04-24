import { Sidebar } from "./components/Sidebar";
import {Cart} from "./components/Cart"
import "./styles/common.css"
import { Togglemode } from "./components/Togglemode";
import {ToggleContext} from "./contexts/Toggle"
import { useContext } from 'react';


// className={Toggle?  `common-width light-mode`:`common-width dark-mode`}
function App() {
  const {Toggle}=useContext(ToggleContext)


  return (
    <div className={Toggle? "container-dark-mode":""}>
      <Sidebar />
      <div style={{paddingTop:"50px"}}>
      <Togglemode />
     <Cart />
      </div>
    </div>
  );
}

export default App;