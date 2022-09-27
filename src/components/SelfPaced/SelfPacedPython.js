import python from '../../assets/python.png'

export const SelfPacedPython = () => {
    return(
            <div className='python row p-5'>
                <div className="pythonText col">
                    <div className="redLine"></div>
                    <p className="pythonHeader headerText">Python<br/>Full Stack Developer</p>
                    <ul>
                        <li>HTML, CSS and JavaScript for the Frontend</li>
                        <li>Learn the Django Framework</li>
                        <li>Create API's and manage data with SQL</li>
                    </ul>
                </div>
                <div className="pythonImage col">
                    <img className='fluid' src={python} alt="sometext" />
                </div>
            </div>
    )
}