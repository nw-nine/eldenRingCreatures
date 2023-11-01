import React from "react";
import "./Monsters.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


function Monsters({ monsters }) {
    console.log(monsters);
    if(monsters) {
        
        return (
            <ul>
                {monsters.data.map((monster) => (
                    <li>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={monster.image} />
                        <Card.Body>
                        <Card.Title>{monster.name}</Card.Title>
                        <Card.Text>
                            {monster.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                  </Card> 
                    </li>
                ))}
            </ul>
        )
    }
}

export default Monsters