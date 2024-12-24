// src/components/ui/card.jsx
export const Card = ({ children, className }) => {
    return (
      <div className={`bg-[#B2EC5D] p-4 rounded-lg shadow-lg ${className}`}>
        {children}
      </div>
    );
  };
  
  export const CardContent = ({ children, className }) => {
    return <div className={`text-gray-700 ${className}`}>{children}</div>;
  };