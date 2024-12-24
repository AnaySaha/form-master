import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

const AssetContext = createContext('gold');

const Grandpa = () => {
  const asset = 'Diamond';
  return (


    <div className="grandpa">
      <h2>Grandpa</h2>
      <AssetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>

  );
};

export default Grandpa;

/***
 * 1. Create a context and export it
 * 2. Add provider for the context with a value
 * 3.
 */