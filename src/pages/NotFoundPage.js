import React from 'react';
import NotFound from 'components/common/NotFound';
import PropTypes from 'prop-types';

const NotFoundPage = ({ history }) => <NotFound onGoBack={history.goBack} />;

NotFoundPage.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func }).isRequired,
};

export default NotFoundPage;
