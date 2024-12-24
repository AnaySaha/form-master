import Sister from "../Dad/Sister/Sister";
import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2> Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name==='Rubaia' && <Sister></Sister>}
            </section>
        </div>
    );
};

export default Cousin;