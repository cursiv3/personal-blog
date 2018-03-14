import React from 'react';
import Link from 'gatsby-link';

const Sidebar = props => (
    <div style={{
        border: '2px solid #e6e6e6',
        width: '400px',
        maxWidth: 960,
        padding: '0.5rem',
        marginBottom: '25px',
        float: 'right',
        clear: 'right'
    }}>
        <p><strong>{props.title}</strong></p>
        <p>{props.description}</p>
    </div>
);


export default Sidebar;