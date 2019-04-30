import React from 'react';
import PropTypes from 'prop-types';

class SimpleCellFormatter extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.bool])
  };

  render() {
    const { value, ...rest } = this.props;
    return <div title={value} {...rest}>{value}</div>;
  }
}

export default SimpleCellFormatter;
