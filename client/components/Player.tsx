import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton, Typography} from "@mui/material";
import styles from "../styles/Player.module.scss";
import {ITrack} from "../types/track";
import {blueGrey} from "@mui/material/colors";
import TrackProgress from "./TrackProgress";

const Player = () => {
    const track:ITrack = {_id:'1', name:'Track 1' , artist:'Freestyler' , text:'fdf dfd df' , listens:2 , picture:'http://localhost:5000/image/0c2754fd-ee1a-44f9-9a9f-d1d8e8c96a6e.jpg' , audio:'http://localhost:5000/audio/0baee19f-56ce-432d-b018-e5d5d12ee21a.mp3' , comments: []};
    const active=false;
    return (
        <div className={styles.player}>
            <IconButton sx={{p:2,mr:1}} onClick={e => e.stopPropagation()}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid container direction={'column'} sx={{mx:2}} width={'auto'}>
                <Typography variant={'h6'} color={'primary'}>{track.name}</Typography>
                <Typography variant={'body2'} color={blueGrey[800]}>{track.artist}</Typography>
            </Grid>
            <TrackProgress left={0} right={100} onChange={()=>({})} />
            <div style={{marginLeft:'auto',display:'flex'}} >
                <VolumeUp />
                <TrackProgress left={0} right={100} onChange={()=>({})} />
            </div>
        </div>
    );
};

export default Player;