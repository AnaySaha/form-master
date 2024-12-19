

const ReuseableForm = ({formTitle, submitBtnText ='Submit'}) => {

    const handleSubmit = e =>{
        e.preventDefault();
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
                    <input type="submit" value={submitBtnText} />
                    {
                        error && <p>{error}</p>
                    }
                </form> 
        </div>
    );
};

export default ReuseableForm;