import React from 'react';
import { ContentContainerProps } from './types';

const WrapperTag = 'div';

const ContentContainer = (props: ContentContainerProps): JSX.Element => {
  const {
    children,
    className: customClassName,
    width,
    maxWidth,
    height,
    maxHeight,
    alignItems,
    justifyContent,
    flexDirection,
    alignSelf,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    padding,
    outline,
    borderRadius,
    position,
    top,
    bottom,
    left,
    right,
    backgroundImage,
    onClick,
  } = props;
  const className = 'content-container';

  const style: ContentContainerProps = {
    width,
    maxWidth,
    height,
    maxHeight,
    alignItems,
    justifyContent,
    flexDirection,
    alignSelf,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    padding,
    outline,
    borderRadius,
    position,
    top,
    bottom,
    left,
    right,
  };

  if (backgroundImage) {
    style.backgroundImage = `url(${backgroundImage})`;
  }

  return (
    <WrapperTag
      onClick={onClick}
      style={style}
      className={
        customClassName ? `${className} ${customClassName}` : className
      }
    >
      {children}
    </WrapperTag>
  );
};

export default ContentContainer;
