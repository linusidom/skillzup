export const ProcessVirtual = () => {
    return(
        <div className="processVirtual">
            <div className="redLineFlex">
                <div className="redLine"></div>
            </div>
            <div className="processVirtualText">
                <p className="processVirtualHeader headerText">
                    Virtual Classes
                </p>

                <p className="processVirtualSubHeader">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium a. Maiores quibusdam facere error maxime totam deleniti ipsum commodi, labore assumenda dolor dolore neque quos architecto id. Voluptatem, quis.</p>
                <button className="button processVirtualLearnMore">Learn More</button>
            </div>

            <div className="processVirtualCards row justify-content-center text-center">

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">Instructor Led</p>
                </div>
             
                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">Monday to Friday<br/>7pm to 8pm</p>
                </div>

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">Classes 5 days per week</p>
                </div>

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">1 Hour Per Day</p>
                </div>

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">Course Cost<br/>20,000 THB</p>
                </div>

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">12 Weeks (60 days)</p>
                </div>
            </div>
        </div>
    )
}