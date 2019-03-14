// import React from 'react';
// import styles from './PostList.scss';
// import classNames from 'classnames/bind';
// import {Link} from 'react-router-dom'

// const cx = classNames.bind(styles);

// const PostItem = () => {
//     return (
//         <div className={cx('post-item')}>
//             <h2><a>타이틀</a></h2>
//             <div className={cx('date')}>2017-10-24</div>
//             <p>내용</p>
//             <div className={cx('tage')}>
//                 <a>#태그</a>
//                 <a>#태그</a>
//                 <a>#태그</a>
//                 <a>#태그</a>
//             </div>
//         </div>
//     );
// }

// const PostList = () => (
//     <div className={cx('post-list')}>
//         <PostItem />
//         <PostItem />
//         <PostItem />
//         <PostItem />
//         <PostItem />
//     </div>
// );

// export default PostList;

import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';

const cx = classNames.bind(styles);

const PostItem = ({ title, body, publishedDate, tags, id }) => {

    const tagList = [...new Set(tags.split(',').map(tag => tag.trim()))].map(
        tag => <Link key={tag} to={`/tag/${tag}`}> #{tag}</Link>)




    return (
        <div className={cx('post-item')}>
            <h2><Link to={`/post/${id}`}>{title}</Link></h2>
            <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
            <p>{removeMd(body)}</p>
            <div className={cx('tags')}>
                {tagList}
            </div>
        </div>
    )
}

const PostList = ({ posts }) => {
    const postList = posts.map(
        (post) => {
            const { postId, title, content, publishedDate, tags } = post.toJS();
            return (
                <PostItem
                    title={title}
                    body={content}
                    publishedDate={publishedDate}
                    tags={tags}
                    key={postId}
                    id={postId}
                />
            )
        }
    )

    return (
        <div className={cx('post-list')}>
            {postList}
        </div>
    )
}


export default PostList;