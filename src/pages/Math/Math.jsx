import React, {Component} from 'react'; 
import NavBar from '../../components/NavBar/NavBar';
import lessonService from '../../utils/lessonService';


class MathPage extends Component {

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
                <NavBar/>
                <p>{lessonShow}</p>
    
            </div>
        )
    
    }
    
    }
    
    export default MathPage;