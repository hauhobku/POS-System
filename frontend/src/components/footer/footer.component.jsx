import React from 'react'
import { useStyles } from './footer.style.component';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './../../assets/images/logo-light.png';
import { Stack, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.flexbox}>
                    <div className={classes.logo}>
                        <Link to="/">
                            <img src={Logo} alt="logo"></img>
                        </Link>
                    </div>

                    <div className={classes.mid}>
                        <Stack spacing={2} direction="row">
                                <Link to="">
                                    <Button>
                                        <FacebookOutlinedIcon/>
                                    </Button>
                                </Link>
                                <Link to="">
                                    <Button>
                                        <TwitterIcon/>
                                    </Button>
                                </Link>
                                <Link to="">
                                    <Button>
                                        <PinterestIcon/>
                                    </Button>
                                </Link>
                                <Link to="">
                                    <Button>
                                        <YouTubeIcon/>
                                    </Button>
                                </Link>
                        </Stack>
                    </div>

                    <div className={classes.contact}>
                        <div className={classes.item}>
                            <LocalPhoneIcon/> 0166 666 666
                        </div>
                        <div className={classes.item}>
                            <MailOutlineIcon/> shop@gmail.com
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
