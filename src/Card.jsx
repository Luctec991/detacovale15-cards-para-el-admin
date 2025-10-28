import React from 'react';
const Card = ({ title, value, icon, className }) => {
    return (
        <div className={`admin-card ${className || ''}`}>
            <div className="card-header">
                {icon && <div className="cardd-icon">{icon}</div>}
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
                <p className="card-value">{value}</p>
            </div>
            </div>
    );
};

export default Card;
