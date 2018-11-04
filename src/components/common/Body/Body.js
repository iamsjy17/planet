import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Body.scss';

const cx = classNames.bind(styles);
const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Body = ({
  children, to, onClick, theme = 'default',
}) => {
  const Element = to ? Link : Div;
  return (
    <Element to={to} className={cx('Body', theme)} onClick={onClick}>
      {children}
    </Element>
  );
};

Body.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

Body.defaultProps = {
  to: '',
  onClick: () => {
    console.warn('onClick not defined');
  },
};

export default Body;
