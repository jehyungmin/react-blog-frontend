import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Header = ({postId, onRemove}) => (
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <div className={cx('brand')}>
                    <Link to="/">reactblog</Link>
                </div>
                <div className={cx('right')}>
                {
                    //조건에 따라 버튼 렌더링
                    postId && [
                        <Button key= "edit" theme="outline" to={`/editor?id=${postId}`}>수정</Button>,
                        <Button key="remove" theme="outline" onClick={onRemove}>삭제</Button>
                    ]
                }
                    <Button theme="outline" to="/editor">새 포스트</Button>
                </div>
            </div>
        </header>
);

export default Header;