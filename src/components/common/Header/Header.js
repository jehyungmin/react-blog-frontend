import React from 'react';
import styles from './Header.scss';
import className from 'classNames.bind';

const cx = classNames.bind(styles);

const Header = () => {
    <div className = {cx('header-template')}>
        Header
    </div>
}