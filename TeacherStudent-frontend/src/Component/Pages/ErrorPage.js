import React from "react";
import Image from 'react-bootstrap/Image'
import { useHistory } from "react-router-dom";


function Error(){
    const history=useHistory();
    console.log(history);
    return(
        <div>
        <h1></h1>
           <Image src="/images/errorimg.jpg" alt="404 Bad Request" style={{height:"100%",width:"100%"}}></Image>
        </div>
    );
}

export default Error;