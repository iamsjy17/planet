import React from 'react';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import PropTypes from 'prop-types';
import styles from './NotFound.scss';

const cx = classNames.bind(styles);

const NotFound = ({ onGoBack }) => (
  <div className={cx('not-found')}>
    <h2>존재하지 않는 페이지입니다.</h2>
    <Button onClick={onGoBack} theme="outline">
      돌아가기
    </Button>
  </div>
);

NotFound.propTypes = {
  onGoBack: PropTypes.func,
};

NotFound.defaultProps = {
  onGoBack: () => {
    console.warn('onGoBack not defined');
  },
};

export default NotFound;
