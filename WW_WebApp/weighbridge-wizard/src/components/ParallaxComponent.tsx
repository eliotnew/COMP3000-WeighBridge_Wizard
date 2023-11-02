import { Parallax,ParallaxLayer } from "@react-spring/parallax"
import React, { useState } from 'react';



export const ParallaxComponent = () =>{
    
    return(
        <>
            <Parallax pages={3}>
                <ParallaxLayer>
                    <h1>hello </h1>

                </ParallaxLayer>
                <ParallaxLayer offset={1}>
                    <h1>hello qfwfwwffwwf </h1>
                    
                </ParallaxLayer>
                <ParallaxLayer offset={2}>
                    <h1>hello qewwqewq </h1>
                    
                </ParallaxLayer>


            </Parallax>
        </>
        
    )
}
export default ParallaxComponent;