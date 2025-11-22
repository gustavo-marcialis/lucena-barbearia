import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  disabled = false,
  type = 'button',
  target,
  rel,
  ...props
}) => {
  const combinedClassName = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${className}
  `.trim();

  // If href is provided, render as anchor (or Link if imported)
  // For simplicity and matching current usage, we'll use a standard <a> tag
  // but styled as a button.
  // Note: if internal routing is needed, next/link should be used,
  // but standard anchors work for #hashes.

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-disabled={disabled}
        role="button"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'gold', 'dark', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default Button;
