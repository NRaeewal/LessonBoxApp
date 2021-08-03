import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreateForm from '../../components/CreateForm/CreateForm'
import lessonService from '../../utils/lessonService';



class CreatePage extends Component {

// do I need this here?
    async componentDidMount() {
    const lessons = await lessonService.index()
    this.props.handleUpdateLessons(lessons)
}

render() {

    const lessonShow = this.props.lessons.map((lesson, idx )=> 
    <p>{lesson.name}</p>
    
    )




    return (
        <div>
            <CreateForm/>
            <p>{lessonShow}</p>
            <Link to='/'>Cancel</Link>

        </div>
    )

}

}

export default CreatePage;