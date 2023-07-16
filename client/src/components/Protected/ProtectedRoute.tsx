import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
};

export default function ProtectedRoute(props: Props) {
    if(localStorage.getItem("token") ) {
        return props.children;
    } else {
        return <Navigate to="/login" />;
    }
}