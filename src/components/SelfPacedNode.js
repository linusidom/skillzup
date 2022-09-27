import { Link } from "react-router-dom"

export const SelfPacedNode = () => {
    return(
        
        <div className='node row p-5'>
        
            <div className="nodeImage col">
                <a className='imageLink' href='https://www.youtube.com/watch?v=NPu97NcZpMA&list=PLA_Vc1i8J5NKpMca85O13d8vXd1Vm9Q9G' target='_blank'>
                    <img className='fluid' src="assets/node.png" alt="sometext" />
                </a>
            </div>
        
            <div className="nodeText col">
                
                <div className="redLine"></div>
                <a className='link' href='https://www.youtube.com/watch?v=NPu97NcZpMA&list=PLA_Vc1i8J5NKpMca85O13d8vXd1Vm9Q9G' target='_blank'>
                    <p className="nodeHeader headerText">Node JS<br/>Full Stack Developer</p>
                    <ul>
                    
                            <li>HTML, CSS and ReactJS for the Frontend</li>
                            <li>Learn the Express Backend</li>
                            <li>Learn about NoSQL Databases</li>
                        
                    </ul>
                </a>
            </div>
            
        </div>
    
    )
}