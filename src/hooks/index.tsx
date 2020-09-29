import React from 'react';

import { AuthProvider } from './useAuth';
import { CommentProvider } from './useComment';
import { ModalProvider } from './useModal';
import { PostProvider } from './usePost';
import { SearchProvider } from './useSearch';


const AppProvider: React.FC = ({ children }) => {
    return(
        <AuthProvider>
            <SearchProvider>
                <ModalProvider>
                     <CommentProvider>
                        <PostProvider>
                            {children}
                        </PostProvider>
                     </CommentProvider>
                </ModalProvider>
            </SearchProvider>
        </AuthProvider>
    )
}

export default AppProvider;

