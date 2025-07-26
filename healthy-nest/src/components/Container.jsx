// src/components/Container.jsx
const Container = ({ children, className = '' }) => (
  <div className={`max-w-screen-xl mx-auto px-4 md:px-5 ${className}`}>
    {children}
  </div>
);

export default Container;
