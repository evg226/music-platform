import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {ITrack} from "../../types/track";
import {useRouter} from "next/router";
import {Box, Button, Card, Container, Grid, TextField, Typography} from "@mui/material";
import {Image} from "@mui/icons-material";
import {blueGrey, grey, indigo, lightBlue} from "@mui/material/colors";


const TrackPage = () => {
    const track:ITrack = {_id:'1', name:'Track fkldkf klafla ksldff kldskf 1' , artist:'Freestyler' , text:'fdf dfd df' , listens:2 , picture:'http://localhost:5000/image/0c2754fd-ee1a-44f9-9a9f-d1d8e8c96a6e.jpg' , audio:'http://localhost:5000/audio/0baee19f-56ce-432d-b018-e5d5d12ee21a.mp3' , comments: []};
    const router=useRouter();

    return (
        <MainLayout>
            <Container>
                <Box>
                    <Button
                        sx={{ml:2}}
                        variant={'outlined'}
                        onClick={() => router.push('/tracks')}
                    >К списку</Button>
                    <Grid  container justifyContent={"center"}>
                        <div style={{flex:'0 1 250px', margin:'1Rem'}}>
                            <img src={track.picture} width={'100%'}/>
                        </div>
                        <Grid sx={{my:2,flex:'1 1 350px'}}>
                            <Typography variant={'caption'}>Название</Typography>
                            <Typography
                                variant={'h4'}
                                pl={1}
                                color={'primary'}>
                                {track.name}</Typography>
                            <Typography variant={'caption'}>Исполнитель</Typography>
                            <Typography
                                variant={'h5'}
                                pl={1}
                                color={indigo[400]}>
                                {track.artist}</Typography>
                            <Typography variant={'caption'}>Прослушиваний</Typography>
                            <Typography
                                variant={'h5'}
                                pl={4}
                                color={blueGrey[500]}>
                                {track.listens}</Typography>
                        </Grid>
                    </Grid>
                    <Grid p={2}>
                        <Typography mb={1}
                                    variant={'body1'}
                        >Слова к песне</Typography>
                        <Typography
                            ml={1}
                            variant={'body2'}
                            color={grey[600]}
                            >{track.text}</Typography>
                    </Grid>
                    <Grid p={2}>
                        <Typography mb={1}
                                    variant={'body1'}
                        >Комментарии</Typography>
                        <Grid>
                            <TextField
                                label={'Ваше Имя'}
                                fullWidth
                            />
                            <TextField
                                label={'Комментарий'}
                                fullWidth
                                multiline
                                rows={4}
                            />
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </MainLayout>
    );
};

export default TrackPage;