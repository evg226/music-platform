import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField, Typography} from "@mui/material";
import FileUpload from "../../components/FileUpload";

const Create = () => {
    const [activeStep,setActiveStep]=useState(0);
    const [picture,setPicture]=useState(null);
    const [audio,setAudio]=useState(null);
    const next=()=>{
        activeStep<3 && setActiveStep(prev=>prev+1);
    }
    const back=()=>{
        setActiveStep(prev=>prev-1);
    }

    return (
        <MainLayout>
            <Typography
                variant={"h4"}
                mb={4}
                textAlign={"center"}
            >Загрузка трека</Typography>
            <StepWrapper activeStep={activeStep}>
                <Grid container direction={'column'} justifyContent={"center"}
                      style={{minHeight:300}}>
                    {activeStep === 0 &&
                        <>
                            <TextField
                                style={{marginTop: 10}}
                                label={'Название трека'}
                            />
                            <TextField
                                style={{marginTop: 10}}
                                label={'Имя исполнителя'}
                            />
                            <TextField
                                style={{marginTop: 10}}
                                label={'Слова к треку'}
                                multiline
                                rows={3}
                            />
                        </>
                    }
                    {activeStep===1 &&
                        <FileUpload setFile={setPicture} accept={'image/*'}>
                            <Button>Загрузить рисунок</Button>
                        </FileUpload>
                    }
                    {activeStep===2 &&
                        <FileUpload  setFile={setAudio} accept={'audio/*'}>
                            <Button>Загрузить аудио</Button>
                        </FileUpload>
                    }
                </Grid>
                <Grid container justifyContent={'space-evenly'} sx={{pb:2}}>
                    <Button disabled={activeStep===0} onClick={back}>Назад</Button>
                    <Button onClick={next}>Далее</Button>
                </Grid>
                </StepWrapper>
        </MainLayout>
    );
};

export default Create;