import React from 'react';

class Post extends React.Component {
    render(){
        return (
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <div className="well">
                <p>{this.props.body}</p>
              </div>
            </div>
        )
    }
}

export default Post;
