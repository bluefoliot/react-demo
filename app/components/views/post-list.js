import React from 'react';
import Post from './post';

class PostList extends React.Component {

    render(){
        let posts = [];
        this.props.postList.forEach((post, index) => {
            posts.push(<Post key={index} body={post['body']}></Post>)
        })
        return (
            <div className="row">
              {posts}
            </div>
        )
    }

}

export default PostList;
