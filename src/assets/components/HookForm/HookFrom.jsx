import useInputState from "../hooks/useInputState";


const HookFrom = () => {
    const [name, handleNameChange] = useInputState('Rojoni')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('form data', name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <input value={name} onChange={handleNameChange} type="text" name="name" />
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

export default HookFrom;