import './Comp.modules.css'
import 'boxicons'

const Comp = ({component}) => {

    return (
        <>
            <section className='comp'>
                <div className="comp__element">
                    {component.component && <component.component/>}
                </div>
                <section className='comp__information'>
                    <h2>{component.name}</h2>
                    {
                        component.framework =="css"?
                        <box-icon name='css3' type='logo' color='#2965f1' size='md'></box-icon>:
                        component.framework =="tailwind"?
                        <box-icon name='tailwind-css' type='logo' color='#38bdf8'></box-icon>:
                        null
                    }    
                </section>
            </section>
        </>
    );
}


export default Comp