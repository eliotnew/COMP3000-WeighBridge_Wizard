import { Box, Container, Typography } from "@mui/material";
import { IParallax, Parallax,ParallaxLayer } from "@react-spring/parallax"
import React, { useRef, useState } from 'react';
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
import { Directions } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer, faWandSparkles } from "@fortawesome/free-solid-svg-icons";



export const ParallaxComponent = () =>{
    const {theme} = useColorTheme();
    const ref = useRef<IParallax | null>(null);
    return(
        <>
            <Parallax pages={3} ref={ref}>

                {/* Two of the three slides have backgrounds */}
                <ParallaxLayer offset={1}  speed={0} factor={1} style={{ backgroundImage: `url(${pic1})`, backgroundSize: "cover", backgroundPosition:"center center", filter: "blur(8px)" } }onClick={() => ref.current?.scrollTo(2)}>  
                </ParallaxLayer>
                <ParallaxLayer offset={2}  speed={0} factor={1} style={{ backgroundImage: `url(${pic3})`, backgroundSize: "cover", backgroundPosition:"center center", filter: "blur(8px)" } } onClick={() => ref.current?.scrollTo(0)}>
                </ParallaxLayer>
                
                

                <ParallaxLayer  offset={0} speed={-3} factor={1} onClick={() => ref.current?.scrollTo(1)} >

                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"center",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, marginTop:'30vh'}}>
                            <h2>Welcome to</h2>
                            <Typography className='WizardFont'variant="h4" noWrap component="div" sx={{ fontFamily: 'Bona Nova',paddingBottom:'20px', display: { xs: 'none', sm: 'block' },fontWeight:1000 }}>WeighBridge Wizard...</Typography>
                            <h4><FontAwesomeIcon icon={faArrowPointer} beat size="xl" style={{paddingLeft:'10px',paddingRight:'10px'}} />Click to continue...</h4>                      
                    </Box>     
                                         
                </ParallaxLayer>

                {/* Page 2 */}
                <ParallaxLayer offset={1.1} speed={1} factor={0} onClick={() => ref.current?.scrollTo(2)}>
                    {/* Page 2- Title */}
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)', justifyContent: 'center', backgroundColor: theme.palette.primary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText,}}>
                                <h1>A weighbridge solution designed to be used by everyone and anyone...</h1>
                        </Box>    
                </ParallaxLayer>

                <ParallaxLayer offset={1.3} speed={3} factor={1} onClick={() => ref.current?.scrollTo(2)}> 

                    <Container sx={{display: 'flex', flexDirection:'row',  gap: '8vw' }}>
                        <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow: '0px 8px 16px rgba(0, 0, 0,0.4)', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.secondary.main,width:'25vw', Height:'25vh',textAlign:"center", display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, }}>
                                    
                                    <img src={tabs} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                    <h3><FontAwesomeIcon icon={faWandSparkles} beat size="lg" /> Responsive & Interactive design to create a productive workflow using dynamic tabs to keep up with busy demand.</h3>
                            </Box>    
                        <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow:  '0px 8px 16px rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, width:'25vw', Height:'25vh',textAlign:"center",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText,}}>
                                
                                <img src={learning} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                <h3><FontAwesomeIcon icon={faWandSparkles} beat size="lg"/> Featuring intuitive user friendly interface with help and training within the application. </h3>
                        </Box>   
                        <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow:  '0px 8px 16px rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, width:'25vw', Height:'25vh',textAlign:"center",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, }}>
                                
                                <img src={manage} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                <h3><FontAwesomeIcon icon={faWandSparkles} beat size="lg"/> Making it cheaper and easier for you to manage your weighbridge staff force!</h3>
                        </Box>  
                        
                    </Container>              
                   
                </ParallaxLayer>
               

                {/* Page 3 */}

                <ParallaxLayer offset={2.1} speed={3} factor={0} onClick={() => ref.current?.scrollTo(0)}>
                    {/* Page 3-Title */}
                    <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow:  '0px 8px 16px rgba(0, 0, 0, 0.4)', alignItems: 'left', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, margin:'35px',width:'50vw', Height:'25vh',textAlign:"left",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, }}>
                                <h1>A weighbridge solution different from others:</h1>
                        </Box>    
                </ParallaxLayer>


                <ParallaxLayer offset={2.5} speed={1} factor={1}
                >
                    <Container sx={{display: 'flex', flexDirection:'row',  gap: '8vw' }} onClick={() => ref.current?.scrollTo(0)}>

                        <Box p={2}  sx={{ borderRadius: '24px 24px 24px 24px', boxShadow:  '0px 8px 16px rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main, width:'25vw', Height:'25vh',textAlign:"center",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, }}>
                                
                                <img src={ai} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                <h3> AI assisted form completion to speed up processes.</h3>
                        </Box>    
                        
                        <Box p={2} sx={{ borderRadius: '24px 24px 24px 24px', boxShadow:  '0px 8px 16px rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main, width:'25vw', Height:'25vh',textAlign:"center",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, }}>
                                
                                <img src={cloud} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                <h3> Cloud based and paperless system to save the trees!</h3>
                        </Box>    

                        <Box p={2}sx={{ borderRadius: '24px 24px 24px 24px', boxShadow:  '0px 8px 16px rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main, width:'25vw', Height:'25vh',textAlign:"center",mx: 'auto', display: 'flex', flexDirection: 'column',color: theme.palette.primary.contrastText, }}>
                                <img src={loading} alt="Image taken from storyset.com in compliance" style={{ width: '200px', height: '200px' }}/>
                                <h3> An inclusive approach to processing cargo and freight with accessibilty options</h3>
                        </Box>



                    </Container>
                </ParallaxLayer>
                
                

            </Parallax>
        </>
        
    )
}
export default ParallaxComponent;