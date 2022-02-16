import React from 'react';
import {Navbar} from "../components/Navbar";

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <div className={'page'}>
                <Navbar/>
                  <div className={'content'}>
                        {children}
                  </div>
            </div>

            <style jsx>
                {`
                .page {
                    display:flex;
                    flex-direction:column;
                    min-height:98vh
                }
                .content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;  
                        justify-content: center;
                        flex:1
                    }
            `}
            </style>
        </>
    );
};

export default MainLayout;