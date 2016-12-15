import React from 'react';
import Subcomponent from './Subcomponent';

export default function MyComponent() {
    return (
        <div>
            <span className="heading">Title</span>
            <Subcomponent foo="bar" />
        </div>
    );
}