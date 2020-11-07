import React from "react";

import Card from "../molecules/Card"
import Header from "../organisms/Header"

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
       <div className="home-page">
        <Header />
        
        <h1 className="welcome">Welcome {user_name}</h1>
        
        <div className ="card">
            {Cards}
        </div>
       </div>
    );
}

  