import React from 'react';
import "./ShowTeacher.css";
import { Card, Col} from 'react-bootstrap';

const ShowAdmission = (props) => {
    const {course,instractor,email,images,duration}=props.teacher;
    return (
        <div className='teacher-container'>
            <Col>
                <Card>
                    <Card.Img className='image' variant="top" src={images} />
                    <Card.Body>
                        <Card.Title className='bold'><h1>{instractor}</h1></Card.Title>
                        <Card.Text>
                            <h3>Course: {course}</h3>
                            <p>Email: {email}</p>
                            <p> Duration: {duration}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Col>
        </div>
    );
};

export default ShowAdmission;
