import React from 'react'

const hero = () => {
    return (
        <div className='hero-div'>

            <div className='left container'>

                <div className='hero-text'>
                    <h1>Unlock Global Opportunities</h1>
                    <p>Venturing beyond borders? Dive into a curated list of jobs that come with VISA and relocation support. Explore, apply, and kickstart your global journey with confidence.</p>
                </div>

                <div className='hero-features'>

                    <strong><p> 🌎 Global Jobs, Handpicked for You.</p></strong>
                    <p>Every job listing we showcase is handpicked, offering visa and relocation assistance, making your international job hunt seamless.</p>
                </div>

                <div className='hero-features'>

                    <strong><p> 🛠️ Navigate with Insight.</p></strong>
                    <p>Get comprehensive insights about each country, ensuring you are well-prepared for your new journey.</p>
                </div>

                <div className='hero-features'>

                    <strong><p> 🤝 More Than Just Job Listings.</p></strong>
                    <p> Join our vibrant community to seek referrals, explore our pay parity calculator, and understand your potential take-home with our tax calculator.</p>
                </div>

            </div>

            <div className='img container'>

                <img
                    src={require('../media/Frame.png')}
                    alt="Logo"
                    style={{ width: '600px', height: '450px' }}
                />

            </div>

        </div>
    )
}

export default hero
