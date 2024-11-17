import React from "react";
import Item from "../Components/item";
import ItemData from "../Database/ItemData";
function Dispensary() {



    return(
      
        <div className = "item">  
        {ItemData.map((item) => (
            <Item
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
         
            />
        ))}
   
   </div>
    )
}

export default Dispensary;