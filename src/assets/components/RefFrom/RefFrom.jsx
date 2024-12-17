import { useEffect } from "react";


const RefFrom = () => {

    const nameRef = useRef(null);
    useEffect ( () => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
    }
    return (
        <div>
               <form onSubmit={handleSubmit}>
                    <input ref={nameRef} defaultValue={Anay Saha} type="text" name="name" />
                    <br />
                    <input type="email" name="email" />
                    <br />
                    <input type="password" name="password" required />
                    <br />
                    <input type="submit" value="Submit" />
                    {
                        error && <p>{error}</p>
                    }
                </form> 
        </div>
    );
};

export default RefFrom;