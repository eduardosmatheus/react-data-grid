import React from 'react';

/**
 * Inject max-content width to make cell auto-resizable.
 *
 * @param {*} Component
 */
export default function withContentSize(Component) {
  return function ComponentWithMaxContent({ style, ...rest }) {
    return (
      <Component
        style={{ ...style, width: 'max-content' }}
        {...rest}
      />
    );
  };
}
