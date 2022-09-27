import ml from '../../assets/ml.png'

export const SelfPacedMachineLearning = () => {
    return(
        <div className='ml row p-5'>
            <div className="mlImage col">
                <a className='link' href='https://www.youtube.com/watch?v=-rcDUSeQw_M&list=PLA_Vc1i8J5NIhUNds8S7bA2c_HsJbQ7gh' target='_blank' rel="noreferrer">
                    <img className='fluid' src={ml} alt="sometext" />
                </a>
            </div>

            <div className="mlText col">
                <div className="redLine"></div>
                <a className='link' href='https://www.youtube.com/watch?v=-rcDUSeQw_M&list=PLA_Vc1i8J5NIhUNds8S7bA2c_HsJbQ7gh' target='_blank' rel="noreferrer">
                    <p className="mlHeader headerText">Data Sciences with Python</p>
                    <ul>
                        <li>Learn how todays leading data scientists predict data</li>

                        <li>Understand how to use the leading libraries such as SciKit Learn and TensorFlow</li>

                        <li>Learn how to intergrate with the existing community of Machine Learning Developers</li>
                    </ul>
                </a>
            </div>
        </div>

    )
}