import React from 'react';

const SimpleFrom = () => {

    const handleSubmit = e =>{
    e.preventDefault();
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
        </div>
    );
};

export default SimpleFrom;