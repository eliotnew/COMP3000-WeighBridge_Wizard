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


        </>

    )
}
export default DevPage;