import process from '../../assets/process.png'

export const ProcessHero = () => {
    return (
        <div className='process row align-items-center'>
            <div className='processText col'>
                
                <div className="redLine"></div>

                <div className="processTitle">
                    <p className='processHeader'>Apply Now</p>
                </div>
                
                <div className="processSubHeader">
                    <p className="processSubHeader">4 Simple Steps to get you on the right track</p>
                </div>    

                <div className="processButtons">
                    <button className='button processTryItNow'>Try It Now</button>
                    <button className='button processCourses'>Courses</button>
                </div>
            </div> 

            <div className='processImage col d-none d-sm-block'>
                <div className="image">
                    <img className='fluid' src={process} alt="sometext" />
                </div>
            </div>

        </div>

    )
}