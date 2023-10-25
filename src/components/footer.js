import React from 'react'


const footer = () => {
    return (
        <div className='footer-container'>

            <hr></hr>

            <h2>Join our journey</h2>
            <small>Stay in the loop with updates, sneak peeks and more. Follow our progress.</small>

            <br></br>

            <a href="https://www.facebook.com/">
                <img
                    src={require('../media/fb.png')}
                    alt="Logo"
                    style={{ width: '20px', height: '20px' }}
                />
            </a>    


            <a href="https://www.instagram.com/">
            <img
                src={require('../media/insta.png')}
                alt="Logo"
                style={{ width: '20px', height: '20px' }}
            />
            </a>

            <a href="https://www.linkedin.com/">
            <img
                src={require('../media/linkedin.png')}
                alt="Logo"
                style={{ width: '20px', height: '20px' }}
            />
            </a>

        </div>
    )
}

export default footer
