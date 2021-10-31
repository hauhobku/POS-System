import React from "react";
import { useStyles } from "./productlist.style.component";
import { Container, Grid } from "@mui/material";
import Product from "./../product/product.component";
import titleBottom from "./../../assets/images/title-bottom.png";
import { Stack, Pagination } from "@mui/material";

function Productlist(props) {
    const classes = useStyles();
    return (
        <div className={classes.root} id="menu">
        <Container>
            <div className={classes.flexbox} style={{width: `${(props.num === 4) ? "75%" : "100%"}`}}>
                <div className={classes.title}>
                    <p>{props.name}</p>
                    <img src={titleBottom} alt="title"></img>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={props.num}>
                    <Product />
                    </Grid>
                    <Grid item xs={props.num}>
                    <Product />
                    </Grid>
                    <Grid item xs={props.num}>
                    <Product />
                    </Grid>
                    <Grid item xs={props.num}>
                    <Product />
                    </Grid>
                    <Grid item xs={props.num}>
                    <Product />
                    </Grid>
                    <Grid item xs={props.num}>
                    <Product />
                    </Grid>
                    <Grid item xs={props.num}>
                    <Product />
                    </Grid>
                    <Grid item xs={props.num}>
                    <Product />
                    </Grid>
                </Grid>
                <div className={classes.pagi}>
                    <Stack spacing={1}>
                    <Pagination count={10} variant="outlined" color="success" />
                    </Stack>
                </div>
            </div>
            <div className={classes.cart}>
                
            </div>
        </Container>
        </div>
    );
}

export default Productlist;
