import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from '../components/list/ListWrapper/ListWrapper';
import PostList from '../components/list/PostList';
import Pagination from '../components/list/Pagination/Pagination';
import ListContainer from '../containers/list/ListContainer';

const ListPage = ({match}) => {
    const {page = 1, tag } = match.params;
    return (
        <PageTemplate>
            <ListWrapper>
                {/* <PostList />
                <Pagination /> */}
                <ListContainer
                    page={parseInt(page, 10)}
                    tag={tag}/>
            </ListWrapper>
        </PageTemplate>
    )
}

export default ListPage;