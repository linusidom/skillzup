import { Link } from "react-router-dom"

export const HomeOptions = () => {
    return(
        <div className="homeOptions">
            <div className="redLineFlex">
                <div className="redLine"></div>
            </div>

            <div className="homeOptionsText">
                <p className="homeOptionsHeader headerText">
                    Pick the path that works for you
                </p>

                <p className="homeOptionsSubHeader">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium a. Maiores quibusdam facere error maxime totam deleniti ipsum commodi, labore assumenda dolor dolore neque quos architecto id. Voluptatem, quis.</p>
                <Link to='/process' className="button homeOptionsLearnMore">Learn More</Link>
            </div>

            <div className="homeOptionsImages row">

                <div className='free col-sm homeOptionsImage px-0 m-2'>
                    <Link to='/selfpaced'>
                        <img className='fluid' src="assets/free.png" alt="sometext" />
                    </Link>
                </div>
                <div className='virtual col-sm homeOptionsImage px-0 m-2'>
                    <Link to='/process'>
                        <img className='fluid' src="assets/virtual.png" alt="sometext" />
                    </Link>
                </div>

                <div className='classroom col-sm homeOptionsImage px-0 m-2'>
                    <Link to='/process'>
                        <img className='fluid' src="assets/classroom.png" alt="sometext" />
                    </Link>
                </div>
            </div>
        </div>
    )
}