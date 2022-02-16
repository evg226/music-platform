import React from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton, Typography} from "@mui/material";
import styles from '../styles/TrackItem.module.scss';
import {Delete, Image, Pause, PlayArrow} from "@mui/icons-material";
import {blueGrey} from "@mui/material/colors";
import {useRouter} from "next/router";

interface TrackItemProps {
    track: ITrack;
    active?:boolean;
}

const TrackItem:React.FC<TrackItemProps> = ({
          track, active= true}) => {

    const router=useRouter();

    return (
        <Card className={styles.track} onClick={()=>router.push('/tracks/'+track._id  )}>
            <IconButton sx={{p:2,mr:1}} onClick={e => e.stopPropagation()}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={track.picture} />
            <Grid container direction={'column'} sx={{mx:2}}>
                <Typography variant={'h6'} color={'primary'}>{track.name}</Typography>
                <Typography variant={'body2'} color={blueGrey[800]}>{track.artist}</Typography>
            </Grid>
            {active && <Typography variant={'caption'} component={'div'} color={blueGrey[900]}>00:30 03:55</Typography>}
            <IconButton sx={{ml:1, p:1}} onClick={e => e.stopPropagation()}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;