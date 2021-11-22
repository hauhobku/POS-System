import React from "react";
import { Grid, Button } from '@mui/material';
import { useStyles } from './item.style.component';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Popover from '@mui/material/Popover';

function Item(props) {
    const classes = useStyles();

    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;

    const user = props.user;

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} spacing={2}>
                <Grid className={classes.item} item xs={3}>
                    {user.name}
                </Grid>
                <Grid className={classes.item} item xs={3}>
                    {user.email}
                </Grid>
                <Grid className={classes.item} item xs={3}>
                    {user.phone}
                </Grid>
                <Grid className={classes.item} item xs={3}>
                    {user.username}
                </Grid>
            </Grid>
            <Button>
                <MoreVertIcon/>
            </Button>
            {/* <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className={classes.boxPop}>
                    <div>
                        <Button>
                            DELETE
                        </Button>
                    </div>
                    <div>
                        <Button>
                            EDIT
                        </Button>
                    </div>
                </div>
            </Popover> */}
        </div>
    );
}

export default Item;
