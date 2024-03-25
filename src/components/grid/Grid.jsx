import './Grid.modules.css'
import Comp from "../comp/Comp";
import { uuidv4 } from '../../utils/uuidv4';

const Grid = ({components}) =>{

    return (
        <>
            <div className="grid">
                {components.map((Component, index)=>(
                   <Comp key={uuidv4()} id={index} component={Component}/> 
                ))}
            </div>
        </>
    );
}


export default Grid