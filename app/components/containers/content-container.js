import React from 'react';
import {connect} from 'react-redux';
import * as commonApi from '../../api/common-api';
import PostList from '../views/post-list';
import TodoList from '../views/todo-list';
import AlbumList from '../views/album-list';
import * as constant from '../../constant';

const ContentContainer = React.createClass({
    getInitialState: function() {
        return {content: this.props.params.content};
    },

    componentDidMount: function(){
        let userId = this.props.params.userId;
        if(userId){
            this.props.dispatch(this.loadData(userId));
        }
    },

    componentDidUpdate: function(){
        let userId = this.props.params.userId;
        let content = this.props.params.content;
        if((userId && userId!=this.props.userId)){
            this.props.dispatch(this.loadData(userId));
        } else if(content!=this.state.content){
            this.setState({content: content});
            this.props.dispatch(this.loadData(userId));
        }
    },

    component: function(){
        let content = this.props.params.content;
        switch(content){
            case constant.CONTENT_POST:
                return <PostList {...this.props} />;
            case constant.CONTENT_TODO:
                return <TodoList {...this.props} />;
            case constant.CONTENT_ALBUM:
                return <AlbumList {...this.props} />;
        }
        return '';
    },

    loadData: function(userId){
        let content = this.props.params.content;
        switch(content){
            case constant.CONTENT_POST:
                return commonApi.loadPostListByUser(userId);
            case constant.CONTENT_TODO:
                return commonApi.loadTodoListByUser(userId);
            case constant.CONTENT_ALBUM:
                return commonApi.loadAlbumListByUser(userId);
        }
    },

    render: function() {
        let component = this.component();
        return (
            <div>
                {component}
            </div>
        );
    }
});

const mapStateToProps = store => {
    return {
        postList: store.contentState.postList,
        todoList: store.contentState.todoList,
        albumList: store.contentState.albumList,
        userId: store.userState.userId
    };
}

export default connect(mapStateToProps)(ContentContainer);
