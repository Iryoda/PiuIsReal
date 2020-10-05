import React from 'react';

import { DeleteProvider } from './usaDelete';
import { AuthProvider } from './useAuth';
import { GetProvider } from './useGet';
import { ModalProvider } from './useModal';
import { PostProvider } from './usePost';
import { SearchProvider } from './useSearch';
import { ThemeProvider} from 'styled-components';
import {theme1} from '../assets/style/globalstyle';


const AppProvider: React.FC = ({ children }) => {
    return(
        <AuthProvider>
            <SearchProvider>
                <ModalProvider>
                     <GetProvider>
                        <PostProvider>
                            <DeleteProvider>
                                <ThemeProvider theme = {theme1}>
                                    {children}
                                </ThemeProvider>
                            </DeleteProvider>
                        </PostProvider>
                     </GetProvider>
                </ModalProvider>
            </SearchProvider>
        </AuthProvider>
    )
}

export default AppProvider;

