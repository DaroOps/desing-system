import './Catalog.modules.css'

import { Grid, Tcmp} from "../../components";

const Catalog = () =>{
    let components = [Tcmp, Tcmp, Tcmp,Tcmp,Tcmp,Tcmp,Tcmp,Tcmp,Tcmp,Tcmp,Tcmp,Tcmp,Tcmp]

    return (
            <div className="catalog">
                    <h1 color="#fff">Catalog</h1>
                    <Grid components={components}/>
                    
            </div>
    );
}


export default Catalog