import {Link} from 'react-router-dom'

export const HomeHero = () => {
    return(
        
            <div className='hero row align-items-center justify-content-evenly'>
                <div className='heroText col'>
                    
                    <div className="redLine"></div>

                    <div className="heroTitle">
                        <p className='heroHeader'>Start Learning Now</p>
                    </div>
                    
                    <div className="heroSubHeader">
                        <p className="heroSubHeader">Your Coding Roadmap to Freedom</p>
                    </div>    

                    <div className="heroButtons">
                        <Link to='/selfpaced' className='button heroTryItNow'>Try It Now</Link>
                        <Link to='/process' className='button heroCourses'>Courses</Link>
                    </div>
                </div> 

                <div className='heroImage col d-none d-sm-block'>
                    <div className="image">
                        <img className='fluid' src="assets/heroImage.png" alt="sometext" />
                    </div>
                </div>

            </div>
 
    )
}