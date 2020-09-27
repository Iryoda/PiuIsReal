import React from 'react';

import { AuthProvider } from './useAuth';
import { PostProvider } from './usePost';


const AppProvider: React.FC = ({ children }) => {
    return(
        <AuthProvider>
            <PostProvider>
            {children}
            </PostProvider>
        </AuthProvider>
    )
}

export default AppProvider;

