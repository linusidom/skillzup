import Form from 'react-bootstrap/Form';

export const ContactUs = () => {
    return(
        
            <div className='contact row align-items-center'>
                <div className='contactText col'>
                    
                    <div className="redLine"></div>

                    <div className="contactTitle">
                        <p className='contactHeader'>Application Form</p>
                    </div>
                    
                    <div className="contactSubHeader">
                        <p className="contactSubHeader">Please Fill out the form to apply</p>
                    </div>    

                    <div className="contactButtons">
                        <button className='button contactTryItNow'>Try It Now</button>
                        <button className='button contactCourses'>Courses</button>
                    </div>
                </div> 

                <div className='contactForm col d-none d-sm-block'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className='formLabel'>Your Name</Form.Label>
                            <Form.Control className='formControl' type="text"/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='formLabel'>Email address</Form.Label>
                            <Form.Control className='formControl' type="email"/>
                        </Form.Group>
                
                        <Form.Group className="mb-3" controlId="formBasicLinkedIn">
                            <Form.Label className='formLabel'>Your LinkedIn Profile</Form.Label>
                            <Form.Control className='formControl' type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='formLabel'>Email address</Form.Label>
                            <Form.Select className='formControl'>
                                <option checked>I'm interested in the Virtual Course</option>
                                <option>I'm interested in the Live Classroom</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Text className="text-muted">
                                We'll never share your information with anyone else.
                        </Form.Text>
                        <button className="button contactButton">Submit</button>
                    </Form>
                </div>

            </div>
 
    )
}