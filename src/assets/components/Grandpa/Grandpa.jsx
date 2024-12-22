import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


const Grandpa = () => {
    return (
        
            <div className="grandpa">
                <h2>Grandpa</h2>
              <section className="flex">
              <Uncle></Uncle>
              <Aunty></Aunty>
              </section>
            </div>
      
    );
};

export default Grandpa;