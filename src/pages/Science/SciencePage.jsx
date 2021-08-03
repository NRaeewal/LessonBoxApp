import React, {Component} from 'react'; 
import NavBar from '../../components/NavBar/NavBar';
import lessonService from '../../utils/lessonService';


class SciencePage extends Component {

    // do I need this here?
        async componentDidMount() {
        const lessons = await lessonService.index()
        this.props.handleUpdateLessons(lessons)
    }
    
    render() {
    
        const lessonShow = this.props.lessons.map((lesson, idx )=> 

    
        <tr>
        <td>{lesson.name}</td>
        <td>{lesson.grade}</td>
        <td>{lesson.materials}</td>
        <td>{lesson.time}</td>
        <td>{lesson.information}</td>
        <td>{lesson.links}</td>
        <td>{lesson.attachments}</td>




        </tr>
        )
    
    
    
    
        return (
            <div>                
                
                <NavBar/>

                <h2>Science Lesson Plans</h2>

{/* { this.props.lessons.name.length ?  */}
        
        

                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col">Lesson Name</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Materials</th>
                    <th scope="col">Time</th>
                    <th scope="col">Information</th>
                    <th scope="col">Links</th>
                    <th scope="col">Attachments</th>

                    </tr>



                </thead>
                <tbody>
                        {lessonShow}
                </tbody>

                </table>
 {/* : 

<h3>No Math Resources Yet</h3>



        }  */}
                            </div>
                        )
                    
                    }
                    
    }
    
    export default SciencePage;