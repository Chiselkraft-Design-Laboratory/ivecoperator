import React from 'react'

import { ResponsiveBar } from "@nivo/bar";
import {colors} from "../theme/darkslate/index";

import{data} from './data'

export default function Bargraph() {
 
    return (
       
        // <div style={{ height: "100px" }}>
        <ResponsiveBar data={data} keys={["y"]} indexBy="x" 
        enableGridY = {false}
        />
    //   </div>
    

    )
}
