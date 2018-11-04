import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';
import styles from './Header.scss';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">Planet</Link>
      </div>
      <div className={cx('menu')}>
        <Button theme="default">about</Button>
        <Button theme="default" to="/Demo">
          Demo
        </Button>
        <Button theme="default">Download</Button>
        <Button theme="default">Contact</Button>
      </div>
    </div>
  </header>
);

export default Header;
