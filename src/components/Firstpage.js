import { height } from '@mui/system';
import React from 'react';
import Navbarr from "./navbarr";

function Firstpage() {
    return (
        <>
            <Navbarr />
            <div className="container">
                <div className="py-4">
                    {/* <h1>Home Page</h1> */}
                    <div style={{
                        backgroundImage: "url(/background.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh',
                        marginTop: '1px',
                        fontSize: '50px',
                    }}>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Firstpage;