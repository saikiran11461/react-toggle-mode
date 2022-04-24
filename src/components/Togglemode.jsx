import * as React from 'react';
import { Switch } from '@mui/material';
import { ToggleContext } from "../contexts/Toggle"
import { useContext } from "react"
export const Togglemode = () => {

  const {handleChange}=useContext(ToggleContext)
  return (
      <div className="common-width toggle-div">
          {/* <div>Dashboard</div> */}
          <div> Dark mode<Switch onClick={()=>handleChange()}/></div>
      </div>
  );
};