import React from 'react';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import styles from './EditorHeader.scss';

const cx = classNames.bind(styles);

const EditorHeader = ({ onGoBack, onSubmit, isEdit }) => (
  <div className={cx('editor-header')}>
    <div className={cx('back')}>
      <Button onClick={onGoBack} theme="outLine">
          뒤로가기
      </Button>
    </div>

    <div className={cx('submit')}>
      <Button onClick={onSubmit} theme="outLine">
        {isEdit ? '수정' : '작성'}
          하기
      </Button>
    </div>
  </div>
);

export default EditorHeader;
