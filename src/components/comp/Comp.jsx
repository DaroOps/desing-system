import './Comp.modules.css'

const Comp = ({ component:Component }) => {

    return (
        <>
            <div className="comp">
                {Component && <Component />}
            </div>
        </>
    );
}


export default Comp