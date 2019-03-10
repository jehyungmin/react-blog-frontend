import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as editorActions from 'store/modules/editor';
import EditorPane from 'components/editor/EditorPane';


class EditorPaneContainer extends Component {

    handleChangeInput = ({name, value}) => {
        const {editorActions} = this.props;
        editorActions.changeInput({name, value});
    }

    render() {
        const { title, tags, markdown } = this.props;
        const { handleChangeInput } = this;

        return (
            <div>
                <EditorPane 
                    title={ title } 
                    markdown = { markdown}
                    tags = {tags}
                    onChangeInput={handleChangeInput}
                />
            </div>
        );
    }
}


export default connect(
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags')
    }),
    (dispatch) => ({
        editorActions: bindActionCreators(editorActions, dispatch)
    })
)(EditorPaneContainer);