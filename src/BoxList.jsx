import { useState } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import {v4 as uuid} from 'uuid';

function BoxList() {
    const [boxes, setBoxes] = useState([])

    const handleAddBox = ({color, height, width}) => {
        
        setBoxes( currBoxes => {
            return [...currBoxes, {id : uuid(), color: color, height: height, width: width}]
        })
    }

    const handleDeleteBox = (id) => {
        setBoxes( currBoxes => {
            return currBoxes.filter((box) =>{
                if(box.id !== id){
                    return box
                }
            });
        })
    }

    return (
        <>
            <NewBoxForm handleAddBox={handleAddBox}  />
            {boxes.map((box) => { 
                return <Box color={box.color} height={box.height} width={box.width} key={box.id} id={box.id} handleDeleteBox={handleDeleteBox}/>
            })}
        </>
    )
}

export default BoxList