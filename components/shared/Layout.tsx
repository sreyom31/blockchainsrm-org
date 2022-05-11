import React from 'react';

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className && className}`}>{children}</div>
  );
};

export default Layout;
