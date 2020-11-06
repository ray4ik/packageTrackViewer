import React from "react";

import Card from "../molecules/Card"
import Header from "../organisms/Header"

import { useState } from "react";

export default function HomePage({information}) {
   
    const Cards = information.map(
        (item) => {
        return <Card key= {item.id} data={item} />
      }
      );

      const {
          user_name,
      } = information[0];

    return (
       <div>
        <Header />
        
        <h1>Welcome {user_name}</h1>
        
        <div className ="card">
            {Cards}
        </div>
       </div>
    );
}

  