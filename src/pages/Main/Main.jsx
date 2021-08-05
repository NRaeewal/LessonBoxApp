import React from 'react'; 
import NavBar from '../../components/NavBar/NavBar';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import CreateButton from '../../components/Button/Button';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Main.css'


const MainPage = (props) => {
    let message = props.user ?
    <div><h2>Take a look at what's new!</h2></div>
    :
    <div><h2>Welcome, please login to find some FREE resources!</h2></div>

        
    const lessonShow = props.lessons.map((lesson, idx )=> 
          
    <tr>
    <td>{lesson.name} </td>
    <td>{lesson.grade}</td></tr>)


    return (
        <div>

            <Header/>            
            <NavBar
            user={props.user}
            handleLogout={props.handleLogout}/> 
            <CreateButton/>
            {message}

            <Card className="Card" style={{ width: '64.5rem' }}>
                <Card.Img align="center" variant="top" src="https://i.ibb.co/DCRYLmP/tim-mossholder-WE-Kv-ZB1l0-unsplash.jpg" alt="tim-mossholder-WE-Kv-ZB1l0-unsplash" border="0" />
                <Card.Body>
                    <Card.Title>{lessonShow}</Card.Title>
                    <Card.Text>
                    Try this lesson!
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

        
        </div>
    )
};


export default MainPage;
