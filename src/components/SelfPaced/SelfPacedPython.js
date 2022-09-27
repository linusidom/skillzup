import python from '../../assets/python.png'

export const SelfPacedPython = () => {
    return(
            <div className='python row p-5'>
                <div className="pythonText col">
                    <div className="redLine"></div>
                    <a className='link' href='https://www.youtube.com/watch?v=_cDm9_-mj-s&list=PLA_Vc1i8J5NL7JvqvZs6CtXvJ19EmnNzv' target='_blank' rel="noreferrer">
                        <p className="pythonHeader headerText">Python<br/>Full Stack Developer</p>
                        <ul>
                            <li>HTML, CSS and JavaScript for the Frontend</li>
                            <li>Learn the Django Framework</li>
                            <li>Create API's and manage data with SQL</li>
                        </ul>
                    </a>
                </div>
                <div className="pythonImage col">
                    <a className='link' href='https://www.youtube.com/watch?v=_cDm9_-mj-s&list=PLA_Vc1i8J5NL7JvqvZs6CtXvJ19EmnNzv' target='_blank' rel="noreferrer">
                        <img className='fluid' src={python} alt="sometext" />
                    </a>
                </div>
            </div>
    )
}