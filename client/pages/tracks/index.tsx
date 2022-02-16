import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Container, Grid, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {IComment, ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router=useRouter();

    const tracks: ITrack[] = [
        {_id:'1', name:'Track 1' , artist:'Freestyler' , text:'fdf dfd df' , listens:2 , picture:'http://localhost:5000/image/0c2754fd-ee1a-44f9-9a9f-d1d8e8c96a6e.jpg' , audio:'http://localhost:5000/audio/0baee19f-56ce-432d-b018-e5d5d12ee21a.mp3' , comments: []},
        {_id:'2', name:'Дорожка 1' , artist:'Bomber' , text:'fdf dfd df' , listens:0 , picture:'http://localhost:5000/image/0c2754fd-ee1a-44f9-9a9f-d1d8e8c96a6e.jpg' , audio:'http://localhost:5000/audio/0baee19f-56ce-432d-b018-e5d5d12ee21a.mp3' , comments: []},
        {_id:'3', name:'New 1' , artist:'Настя' , text:'fdf dfd df' , listens:5 , picture:'http://localhost:5000/image/0c2754fd-ee1a-44f9-9a9f-d1d8e8c96a6e.jpg' , audio:'http://localhost:5000/audio/0baee19f-56ce-432d-b018-e5d5d12ee21a.mp3' , comments: []},
    ];

    return (
        <>
            <MainLayout>
                <Container>
                    <Card >
                        <Box p={2}>
                            <Grid
                                container
                                justifyContent={'space-between'}>
                                <Typography
                                    variant={'h4'}
                                >Треки</Typography>
                                <Button
                                    onClick={()=>router.push('/tracks/create')}
                                >Загрузить</Button>
                            </Grid>
                        </Box>
                        <TrackList tracks={tracks} />

                    </Card>
                </Container>
            </MainLayout>
        </>

    );
};

export default Index;