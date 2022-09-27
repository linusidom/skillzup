export const SelfPacedMachineLearning = () => {
    return(
        <div className='ml row p-5'>
            <div className="mlImage col">
                <img className='fluid' src="assets/ml.png" alt="sometext" />
            </div>

            <div className="mlText col">
                <div className="redLine"></div>
                <p className="mlHeader headerText">Data Sciences with Python</p>
                <ul>
                    <li>Learn how todays leading data scientists predict data</li>

                    <li>Understand how to use the leading libraries such as SciKit Learn and TensorFlow</li>

                    <li>Learn how to intergrate with the existing community of Machine Learning Developers</li>
                </ul>
            </div>
        </div>

    )
}