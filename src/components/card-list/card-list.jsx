import React from 'react';
import './card-list.style.css'
import {Card} from '../card/card'
export const CardList = props => {
    return (
        <div className="container-fluid pl-5 pr-5">
             <div className="row">
            {props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}/>
        ))}
        </div>
        </div>

    )
} 