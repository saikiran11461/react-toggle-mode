import profile from '../assist/profile.jpg'
import {ToggleContext} from "../contexts/Toggle"
import { useContext } from 'react';




export const Sidebar = () => {

const {Toggle}=useContext(ToggleContext)
console.log(Toggle)
  
  return (
    <div className={Toggle? `sidebar dark-mode`:`sidebar light-mode`}>
      <div className="sidebar-profile">
        {/* <img className='sidebar-img' src={profile} alt="" /> */}
      </div>
      <div className="sidebar-middle-navigation">
      <div>
          <i className="fi fi-rr-stats"></i>
        </div>
        <div>
          <i className="fi fi-rs-dice-d10"></i>
        </div>
        <div>
          <i className="fi fi-rr-apps-delete"></i>
        </div>
        <div>
          <i className="fi fi-rr-comment"></i>
        </div>
        <div>
          <i className="fi fi-rr-document"></i>
        </div>
        <div>
          <i className="fi fi-ss-settings"></i>
        </div>
      </div>
      <div className="sidebar-plus-icon">
      <i className="fi fi-rr-add"></i>
      </div>
    </div>

  );
};