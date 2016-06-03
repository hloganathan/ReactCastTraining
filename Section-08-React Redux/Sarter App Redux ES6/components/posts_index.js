import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../index';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends  Component{
      renderpost(){
      	return this.props.posts.map(function(post){
      	     return(</div>
      	     <li key={post.id}>
      	     <Link to={"posts/" + post.id} >
      	     <span >{post.categories}</span>
      	     <span>{post.title}</span>
      	     </Link> 
      	     </li>
      	</div>);	
      	})
      }
      componentWillMount(){
      	this.props.fetchPosts();
      }
      render(){
      	return(<div>
      		<Link to="/posts/new" >
      		</Link>
      		<h3>My All Posts</h3>
      		<ul className="list-group">
      		{this.renderpost}
      		</ul>
      		</div>)
      }

      function mapStateToProps(state){
      	return{posts : state.posts.all}
      }

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)

}

