import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import * as editorActions from 'store/modules/editor';
import EditorHeader from '../../components/editor/EditorHeader';

class EditorHeaderContainer extends Component {
    componentDidMount() {
        const { EditorActions } = this.props;
        EditorActions.initialize();//에디터 초기화
    }

    handleGoBack = () => {
        const {history} = this.props;
        history.goBack();
    }

    handleSubmit = async () => {
        const { title, markdown, tags, EditorActions, history} = this.props;
        const post = {
            title,
            // body: markdown,
            content: markdown,
            // tags: tags === "" ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
            tags: tags,
            userId: 0
        };
        
        //console.log(post);
        try{
            await EditorActions.writePost(post);
            console.log(this.props.postId);
            history.push(`/post/${this.props.postId}`);
        }catch(e){
            console.log(e);
        }
    }

    render() {
        const { handleGoBack, handleSubmit} = this;

        return (
            <EditorHeader
                onGoBack = {handleGoBack}
                onSubmit = {handleSubmit}
            />
            
        );
    }
}

export default connect (
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags'),
        postId: state.editor.get('postId')
    }),
    (dispatch) => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(withRouter(EditorHeaderContainer));