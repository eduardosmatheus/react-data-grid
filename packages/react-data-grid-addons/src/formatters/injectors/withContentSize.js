import React from 'react';

/**
 * Inject max-content width to make cell auto-resizable.
 *
 * @param {*} Component
 */
export default function withContentSize(Component) {
  return function ComponentWithMaxContent(props) {
    const { style, ...rest } = props;
    return (
      <Component {...rest} style={{ ...style, width: 'max-content' }} />
    );
  };
}
