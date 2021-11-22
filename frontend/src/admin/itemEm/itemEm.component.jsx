import React from "react";
import { Grid, Button } from '@mui/material';
import { useStyles } from './itemEm.style.component';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteEmployeeAction, getEmLoadAction } from './../../reducer/employeeReducer';
import { setValueAction } from './../../reducer/viewReduce';


function ItemEm(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const employee = props.employee;

    const handleDelete = async () => {
        try {
            const result = await axios.delete(`http://localhost:3300/api/v1/employee/delete/${employee.email}`);
            dispatch(deleteEmployeeAction(employee.email));
            alert("Xóa thành công!");
        }
        catch (error) {
            alert("Xóa không thành công!");
        }
    }

    const viewUpdateEm = () => {
        var value = {
            value: 6,
            active: 6
        };
        dispatch(setValueAction(value));
    };

    const handleEdit = () => {
        dispatch(getEmLoadAction(employee));
        viewUpdateEm();
    }

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} spacing={2}>
                <Grid className={classes.item} item xs={3}>
                    {employee.name}
                </Grid>
                <Grid className={classes.item} item xs={3}>
                    {employee.email}
                </Grid>
                <Grid className={classes.item} item xs={2}>
                    {employee.phone}
                </Grid>
                <Grid className={classes.item} item xs={2}>
                    {employee.username}
                </Grid>
                <Grid className={classes.item}item xs={2}>
                    {employee.salary}
                </Grid>
            </Grid>
            <Button aria-describedby={id} onClick={handleClick}>
                <MoreVertIcon/>
            </Button>
            <Popover
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
                        <form>
                            <Button onClick={handleDelete} type="submit">
                                DELETE
                            </Button>
                        </form>
                    </div>
                    <div>
                        <Button onClick={handleEdit}>
                            EDIT
                        </Button>
                    </div>
                </div>
            </Popover>
        </div>
    );
}

export default ItemEm;
