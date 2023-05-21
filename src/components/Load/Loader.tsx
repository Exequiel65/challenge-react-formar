
import './loader.css'
interface Props{
    relative : boolean | undefined
}
const Loader = (props: Props) => {
    const pos = props.relative ? "relative" : "absolute"
    return (
        <div className='loader-container' style={{position : pos}} >
            <div className="preloader"></div>
        </div>
        
    );
}

export default Loader;
