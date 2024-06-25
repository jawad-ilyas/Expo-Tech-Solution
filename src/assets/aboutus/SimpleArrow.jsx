import React from 'react';

function SimpleArrow() {
    return (
        <svg className="d-block text-primary" width="400" height="400" viewBox="0 0 339 365" fill="none" xmlns="http://www.w3.org/2000/svg" style={{  }}>
            <path d="M324 291.371C120.111 291.37 240.756 58.7225 1.00032 73.2606" stroke="url(#arrow1)" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6" />
            <path d="M337.375 290.62C338.074 290.998 338.074 292.001 337.375 292.379L328.476 297.196C327.81 297.557 327 297.074 327 296.317L327 286.683C327 285.925 327.81 285.443 328.476 285.803L337.375 290.62Z" fill="currentColor" />
            <defs>
                <linearGradient id="arrow1" x1="324" y1="291.5" x2="-2.99974" y2="72.4997" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="currentColor" />
                    <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SimpleArrow;
