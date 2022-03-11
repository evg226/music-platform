import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useRouter} from "next/router";

export function Navbar() {
    const router=useRouter();

    const navbarItems=[
        {text:'Главная',href:'/'},
        {text:'Треки',href:'/tracks'},
        {text:'Альбомы',href:'/albums'},
    ];

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex',color:'#ffffff', backgroundColor: 'primary.main' }} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Музыкальный каталог
                    </Typography>
                </Toolbar>
            <Drawer
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {pt: 2},
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <IconButton sx={{borderRadius: 0}} onClick={handleDrawerClose}>
                    {<ChevronLeftIcon />}
                </IconButton>

                <List>
                    {navbarItems.map(({text,href},index) => (
                        <ListItem button key={href} sx={{pr: 5}} onClick={()=>router.push(href)}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}