import React from 'react';
import EditorTemplate from '../components/editor/EditorTemplate';
import EditorHeader from '../components/editor/EditorHeader';
import EditorPane from '../components/editor/EditorPane';
import PreviewPane from '../components/editor/PreviewPane';
import PreviewPaneContainer from '../containers/editor/PreviewPaneContainer';
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';

const EditorPage = () => {
    return (
        <div>
            <EditorTemplate 
                header={<EditorHeader/>}
                editor={<EditorPaneContainer/>}
                preview={<PreviewPaneContainer/>}
            />
        </div>
    )
}

export default EditorPage;