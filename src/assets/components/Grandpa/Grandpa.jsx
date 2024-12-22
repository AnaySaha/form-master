import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


const Grandpa = () => {
    return (
        <div>
            <div className="grandpa">
                
                <Uncle></Uncle>
                <Aunty></Aunty>
            </div>
        </div>
    );
};

export default Grandpa;