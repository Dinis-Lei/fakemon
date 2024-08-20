import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export default function ButtonAppBar() {
  
  const tabInfo = [
    {"label": <Typography>Main Page</Typography>, "link": "/"},
    {"label": <Typography>List All</Typography>, "link": "/list"},
    {"label": <Typography>Add Fakemon</Typography>, "link": "/add"},
  ]
  
  const pathname = useLocation().pathname;
  const [currentTab, setCurrentTab] = React.useState(
      tabInfo.findIndex(
          tab => {
              if (pathname === "/") {
                  return tab.link === pathname;
              }
              return pathname.startsWith(tab.link) && tab.link !== "/";
          }
      )
  );
  const changeTab = (event, newValue) => {
      setCurrentTab(newValue);
  }
  
  return (
    <AppBar 
            position="fixed" 
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            id="navbar"
        >
            <Toolbar
                sx={{
                    color: "white",
                }}
            >
                <Box sx={{flexGrow: 0, display: { xs: 'flex'}, justifyContent: "center" }}>
                    <Typography sx={{fontWeight: "bold"}}>
                        Fakemon
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex'}, justifyContent: "center" }}>
                    <Tabs 
                        value={currentTab} 
                        onChange={changeTab} 
                        textColor='white'
                        sx={{
                            boxShadow: "inset 0 -2px 0 0 #E6ECF0",
                        }}
                    >
                        {tabInfo.map((tab, index) => {
                            return (
                                <Tab 
                                    key={index}
                                    label={tab.label}
                                    icon={tab.icon}
                                    component={Link}
                                    to={tab.link}
                                    iconPosition="start"
                                    sx={{minHeight: 0}}
                                />
                            )
                        })}
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
  );
}
