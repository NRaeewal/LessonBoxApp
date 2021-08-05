import React from 'react'; 
import NavBar from '../../components/NavBar/NavBar';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import CreateButton from '../../components/Button/Button';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const MainPage = (props) => {
    let message = props.user ?
    <div><h2>Take a look at what's new!</h2></div>
    :
    <div><h2>Welcome, please login to find some FREE resources!</h2></div>

    return (
        <div>

            <Header/>            
            <NavBar
            user={props.user}
            handleLogout={props.handleLogout}/> 
            <CreateButton/>
            {message}

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
};


export default MainPage;
