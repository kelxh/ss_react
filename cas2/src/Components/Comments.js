import React from 'react';
import PropTypes from 'prop-types';

export class Comments extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div id="comments"> 
                <span>Datum:</span> &nbsp;
                <span>{this.props.date}</span> &nbsp;
                <span>Broj: {this.props.broj}</span> &nbsp;
                <span>Cifra: {this.props.cifra}</span> 

                {this.props.comments.map((comment, i) => {
                    return (
                        <div key={i}>
                            <span>{comment.author}</span> &nbsp;
                            <span>{comment.content}</span> &nbsp;
                            <span>{this.props.date}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

Comments.propTypes = {
    date: PropTypes.string,
    broj: PropTypes.number,
    cifra: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired
}