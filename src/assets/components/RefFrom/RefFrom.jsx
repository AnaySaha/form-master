

const RefFrom = () => {

    const nameRef = useRef(null);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
    }
    return (
        <div>
               <form onSubmit={handleSubmit}>
                    <input ref={nameRef} type="text" name="name" />
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