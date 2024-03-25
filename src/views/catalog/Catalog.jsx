import './Catalog.modules.css'

import { Grid, Tcmp} from "../../components";

const Catalog = () =>{
    const data = [
        {
                name: "dot loader",
                framework: "css", 
                type: "loader",
                component: Tcmp
        }
    ]
    return (
        <>
            <div className="catalog">
                    <h1 color="#fff">Catalog</h1>
                    <Grid components={data}/>
            </div>
        </>
    );
}


export default Catalog