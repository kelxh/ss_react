import React from 'react';
import {connect} from 'react-redux';
import {fetchCommentsRequest} from './../actions/CommentsAction';
import {Link} from 'react-router-dom';

class Comments extends React.Component {  
    componentDidMount(){
        this.props.zemiKomentari();
    }
    render(){
        console.log(this.props)
        return(
            <div id="comments">
                {this.props.komentari.length > 0 ?
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.komentari.slice(0,11).map(comment => {
                            return(
                                <tr key={comment.id}>
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                    <td><Link to={"/comments/" + comment.id}>Go to Comment</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>: <h2>Loading</h2>    
            }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        komentari:state.CommentsReducer.comments
    }
}
const mapDispatchToProps = (dipatch) => {
    return {
        zemiKomentari: () => {
            dipatch(fetchCommentsRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)