import Typography from "@mui/material/Typography";
import React from "react";

interface DevPageProps {
    prop: () => void; // Defines the prop as a void function.
}

export const DevPage: React.FC <DevPageProps> = ({prop}) => {
    return (
        <>
            <h1>DEVPAGE</h1>
            <p> This exists so i can use a really basic functional component as an example</p>
            <body>You see the thing is , typescript interfaces confused me at first and it would be nice to keep a simple example to refer to!</body>
            <button onClick={prop}>Click to return to dash.</button>

            <div>
            <Typography variant="h1" gutterBottom>h1 Heading</Typography>
            <Typography variant="h2" gutterBottom>h2 Heading</Typography>
            <Typography variant="h3" gutterBottom>h3 Heading</Typography>
            <Typography variant="h4" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5" gutterBottom>h5 Heading</Typography>
            <Typography variant="h6" gutterBottom>h6 Heading</Typography>
            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle 2 smaller and bolder</Typography>

            <Typography variant="body1">This is a body 1 paragraph example for setting up my typography</Typography>
            <Typography variant="body2">This is a body 2 paragraph example for setting up my typography</Typography>

        </div>


        </>

    )
}
export default DevPage;