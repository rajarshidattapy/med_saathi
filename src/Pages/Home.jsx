import React, { useContext } from "react";
import ImageCards from "../Components/Cards";
import CardGroup from 'react-bootstrap/CardGroup';
import { useFirebase } from "../Context/firebase";


export default function Home() {
    const{user}=useFirebase();
    return(
        <div>
        
            <CardGroup>
                <ImageCards />
            </CardGroup>
        </div>
    )
}