import { useState } from "react";

const StatefulForm = () => {
    const [email, setEmail] = useState(null);
    const [error, setError] = useState('')
    

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email);

    }

    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
                    <input type="text" name="name" />
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

export default StatefulForm;