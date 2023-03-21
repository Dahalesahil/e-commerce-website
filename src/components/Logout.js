import { height } from '@mui/system';
import React from 'react';
import Navbarr from "./navbarr";

function LogOut() {
    
    return (
        <>
         <Navbarr />
            <div className="container">
                <div className="py-4">
                    {/* <h1>Home Page</h1> */}
                    <div style={{
                        backgroundImage: "url(/thnq.png)", backgroundRepeat: 'no-repeat', backgroundSize: '60%', height: '80vh',
                        marginTop: '1px',
                        fontSize: '50px',
                    }}>


                    </div>
                </div>
            </div>
        </>
    )
}
export default LogOut;
