import * as React from 'react';

export const EditIcon: React.FC = props => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="#000"
            fillRule="evenodd"
            d="M20.709 5.631c.39.39.39 1.02 0 1.41l-1.83 1.83-3.75-3.75 1.83-1.83a.996.996 0 011.41 0l2.34 2.34zm-17.71 14.87v-3.04c0-.14.05-.26.15-.36l10.91-10.91 3.75 3.75-10.92 10.91a.47.47 0 01-.35.15h-3.04c-.28 0-.5-.22-.5-.5z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export default EditIcon;
