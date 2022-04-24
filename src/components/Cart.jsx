import profile from "../assist/profile.jpg";
import {ToggleContext} from "../contexts/Toggle"
import { useContext } from 'react';


export const Cart = () => {


  const {Toggle}=useContext(ToggleContext)
  console.log(Toggle)

  return (
    <div className="common-width">
      <div className={Toggle?  `cart dark-mode`:`cart light-mode`}>
        <div className="cart-top-heading">
          <div>Sai kIran</div>
          <div>Started coding in octobar</div>
        </div>
        <div className="user-data">
          <img src={profile} alt="user-img" />
          <div>
            <div className="name"> SaiKiran Ommi</div>
            <div className="place">Vizag, India</div>
            <div>Full Stack web developer</div>
            <div></div>
          </div>
        </div>
       
      </div>

      
    </div>
  );
};