import { Typography } from '@mui/material';
import React from 'react';
import MainLayout from "../layouts/MainLayout";

const Index = () => {
    return (
        <>
            <MainLayout>
                <Typography
                    mb={2}
                    align={"center"}
                    variant={'h3'}
                >Добро пожаловать!</Typography>
                <Typography
                    variant={'h4'}
                    align={"center"}
                >Здесь собраны лучшие треки</Typography>
            </MainLayout>

            <style jsx>
                {`
                    
                `}
            </style>
        </>
    );
};

export default Index;