

const ReuseableForm = ({formTitle, handleSubmit, submitBtnText ='Submit',
    children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }

    return (
        <div>
            {/* <h2>{formTitle}</h2> */}
            {children}
               <form onSubmit={handleLocalSubmit}>
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