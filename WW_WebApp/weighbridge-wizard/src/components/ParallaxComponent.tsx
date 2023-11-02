import { Box, Typography } from "@mui/material";
import { Parallax,ParallaxLayer } from "@react-spring/parallax"
import React, { useState } from 'react';
import { useColorTheme } from "../themes/use-color-theme";
import { start } from "repl";
import pic1 from '../img_Assets/truck1.jpg';
import pic2 from '../img_Assets/truck2.jpg';
import pic3 from '../img_Assets/truck3.jpg';
import tabs from '../img_Assets/tabsBlue.png';
import manage from '../img_Assets/manageBlue.png';
import learning from '../img_Assets/learningBlue.png';
import ai from '../img_Assets/Artificial intelligence-bro.png';
import cloud from '../img_Assets/cloudGreen.png';
import loading from '../img_Assets/loadingGreen.png';



export const ParallaxComponent = () =>{
    const {theme} = useColorTheme();
    return(
        <>
            <Parallax pages={4}>

                <ParallaxLayer offset={1}  speed={0} factor={1} style={{ backgroundImage: `url(${pic1})`, backgroundSize: "cover", backgroundPosition:"center center", filter: "blur(8px)" }}>  
                </ParallaxLayer>
                <ParallaxLayer offset={2}  speed={0} factor={1} style={{ backgroundImage: `url(${pic3})`, backgroundSize: "cover", backgroundPosition:"center center", filter: "blur(8px)" }}>
                </ParallaxLayer>
                


                <ParallaxLayer  offset={0} speed={-3} factor={1}  >

                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"center",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                            <h2>Welcome to</h2>
                            <Typography className='WizardFont'variant="h4" noWrap component="div" sx={{ fontFamily: 'Bona Nova',paddingBottom:'20px', display: { xs: 'none', sm: 'block' },fontWeight:1000 }}>WeighBridge Wizard...</Typography>
                            <h4>Scroll Down...</h4>                      
                    </Box>     
                                         
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1} factor={2}>
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', alignItems: 'left', justifyContent: 'center', backgroundColor: theme.palette.primary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                                <h1>A weighbridge solution designed to be used by everyone and anyone...</h1>
                        </Box>    
                </ParallaxLayer>

                
                <ParallaxLayer offset={1.2} speed={1} factor={1}>
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', alignItems: 'left', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                                
                                <img src={tabs} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                <h3> Responsive & Interactive design to create a productive workflow using dynamic tabs to keep up with busy demand.</h3>
                        </Box>    
                </ParallaxLayer>
                <ParallaxLayer offset={1.5} speed={1} factor={1}>
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', alignItems: 'left', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                                
                                <img src={learning} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                <h3> Featuring intuitive user friendly interface with help and training within the application. </h3>
                        </Box>    
                </ParallaxLayer>
                <ParallaxLayer offset={1.8} speed={1} factor={1}>
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', alignItems: 'left', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                                
                                <img src={manage} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                <h3> Making it cheaper and easier for you to manage your weighbridge staff force!</h3>
                        </Box>    
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1} factor={2}>
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', alignItems: 'left', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                                <h1>A weighbridge solution different from others:</h1>
                        </Box>    
                </ParallaxLayer>

                <ParallaxLayer offset={2.2} speed={1} factor={1}>
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', alignItems: 'left', justifyContent: 'center', backgroundColor: theme.palette.primary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                                <h3> AI assisted form completion to speed up processes.</h3>
                                <img src={ai} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                        </Box>    
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1} factor={1}>
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', alignItems: 'left', justifyContent: 'center', backgroundColor: theme.palette.primary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                                <h3> Cloud based and paperless system to save the trees!</h3>
                                <img src={cloud} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                        </Box>    
                </ParallaxLayer>

                <ParallaxLayer offset={2.9} speed={1} factor={1}>
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', alignItems: 'left', justifyContent: 'center', backgroundColor: theme.palette.primary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                                
                                <img src={loading} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                <h3> An inclusive approach to processing cargo and freight with accessibilty options</h3>
                        </Box>    
                </ParallaxLayer>



                
                

            </Parallax>
        </>
        
    )
}
export default ParallaxComponent;