import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../index';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends  Component{
    
     constructor(props){
      super(props);
      this.onDeleteItem = this.onDeleteItem.bind(this)
     }

    static contextTypes = {
        router: PropTypes.object
     };
     componentWillMount(){
       this.props.fetchPost(this.props.params.id);
     }
     onDeleteItem(){
      this.props.deletePost(this.props.params.id)
      .then(function(){
              this.context.router.push('/');
      })
     }
      render(){

            const {post} = this.props;
             return(<div>
            }
          <Link to="/" >Back to Index</Link>
          <h3>My selected Post</h3>
          <button onClick={this.onDeleteItem}></button>
          <h3 >
          {post.title}   <br/>      {post.content}     <br/>     {post.category} <br/> 
          </h3>
          </div>)
}
function mapStateToProps(state){
     return{post  : state.posts.post}
}
export default connect(mapStateToProps, {fetchPost , deletePost})(PostsShow)

}

