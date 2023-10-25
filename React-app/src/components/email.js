import React, { useState } from 'react';

const Email = () => {
    const [email, setEmail] = useState('');


    const handleFormSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('http://localhost:8080/demo', {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json();
        console.log(data);

    };


    return (
        <div className='email-container'>
            <h2>Stay ahead of the curve</h2>
            <p>
                Get exclusive early access to the finest global job listings.
                <br /> Sign up below and be the first to know when we launch.
            </p>

            <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleFormSubmit}>Notify me</button>

            <p>🔒 We Value Your Privacy.</p>
            <small>
                Rest assured, your email is safe with us. No spam, just updates
                about our exclusive launch.
            </small>
        </div>
    );
};

export default Email;
