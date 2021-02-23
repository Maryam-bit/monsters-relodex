import React from 'react';
import './card.style.css'
export const Card = (props) => (
   
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card m-3 p-3">
                <div className="image-container text-center">
          <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2`}/>
          </div>
          <h1 className="userName">{props.monster.name}</h1>
          </div></div>
)