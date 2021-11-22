import React, { useState, useEffect } from "react";
import { useStyles } from "./main.styles.component";
import PropTypes from 'prop-types';
import {
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Container,
  Box,
  Typography,
} from "@mui/material";
import Avt from "./../../assets/images/avt.jpeg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from '@mui/icons-material/Person';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

import ListCustomer from './../listcustomer/listcus.componet';
import ListFood from './../listfood/listFood.component';
import CreateFood from './../createFood/createFood.component';
import UpdateFood from './../updateFood/updateFood.component';
import ListEmployee from './../listEmployee/listEmployee.component';
import CreateEmployee from './../createEmployee/createEmployee.component';
import UpdateEmployee from './../updateEmployee/updateEmployee.conponent';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import { setValueAction } from './../../reducer/viewReduce';
import { getCustomersAction } from './../../reducer/customerReducer';
import { getFoodsAction } from './../../reducer/foodsReducer';
import { getEmployeesAction } from './../../reducer/employeeReducer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Main() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { value, active} = useSelector(state => state.Views);


  const handleChange = (event) => {
    const newValue = event.target.value;
    const newPayload = {
      value: Number(newValue),
      active: Number(newValue),
    }
    dispatch(setValueAction(newPayload));
  }

  const handleLogout = (e) => {
    localStorage.removeItem("admin");
    history.push('/loginadmin');
  }
  const getListCustomers = async () => {
    try {
      const result = await axios.get("http://localhost:3300/api/v1/customer/list");
      dispatch(getCustomersAction(result.data));
    }
    catch (err)
    {
      alert("Không thể lấy dữ liệu!");
    }
  }

  const getListFoods = async () => {
    try {
      const result = await axios.get("http://localhost:3300/api/v1/food/list");
      dispatch(getFoodsAction(result.data));
    }
    catch (error) {
      alert("Không thể lấy được dữ liệu!");
    }
  }

  const getListEmployees = async () => {
    try {
      const result = await axios.get("http://localhost:3300/api/v1/employee/list");
      dispatch(getEmployeesAction(result.data)); 
    }
    catch (error) {
      alert("Không thể lấy được dữ liệu!");
    }
  }

  useEffect(() => {
    getListCustomers();
    getListFoods();
    getListEmployees();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.boxleft}>
        <div className={classes.boxadmin}>
          <Avatar alt="Admin" src={Avt} sx={{ width: 45, height: 45 }} />
          <div>
            <h4>{JSON.parse(localStorage.getItem('admin')).admin.email}</h4>
          </div>
        </div>
        <div className={classes.btnLogout}>
            <Button onClick={handleLogout} variant="contained" color="error">
              Đăng xuất
            </Button>
          </div>
        <div className={classes.managebox}>
          
          <h4>MANAGEMENT</h4>
          
          <div>
            <Accordion className={classes.accor}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls=""
                id="user"
                className={classes.accordion}
              >
                <div className={classes.accordionTitle}>
                  <PersonIcon/>
                  <p>USER</p>
                </div>
              </AccordionSummary>
              <AccordionDetails className={classes.accorlist}>
                <div className={classes.tab}>
                  <Button style={{borderRight: `2px solid ${(active === 0) ? 'rgb(0, 171, 85)' : 'white'}`}} value={0} onClick={handleChange}>List</Button>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls=""
                id="food"
                className={classes.accordion}
              >
                <div className={classes.accordionTitle}>
                  <EmojiFoodBeverageIcon/>
                  <p>FOOD</p>
                </div>
              </AccordionSummary>
              <AccordionDetails className={classes.accorlist}>
                <div className={classes.tab}>
                  <Button style={{borderRight: `2px solid ${(active === 1) ? 'rgb(0, 171, 85)' : 'white'}`}} value={1} onClick={handleChange}>List</Button>
                </div>
                <div className={classes.tab}>
                  <Button style={{borderRight: `2px solid ${(active === 2) ? 'rgb(0, 171, 85)' : 'white'}`}} value={2} onClick={handleChange}>Create</Button>
                </div>
                <div className={classes.tab}>
                  <Button style={{borderRight: `2px solid ${(active === 3) ? 'rgb(0, 171, 85)' : 'white'}`}} value={3} onClick={handleChange}>Update</Button>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls=""
                id="employee"
                className={classes.accordion}
              >
                <div className={classes.accordionTitle}>
                  <AccessibilityIcon/>
                  <p>EMPLOYEE</p>
                </div>
              </AccordionSummary>
              <AccordionDetails className={classes.accorlist}>
                <div className={classes.tab}>
                  <Button style={{borderRight: `2px solid ${(active === 4) ? 'rgb(0, 171, 85)' : 'white'}`}} value={4} onClick={handleChange}>List</Button>
                </div>
                <div className={classes.tab}>
                  <Button style={{borderRight: `2px solid ${(active === 5) ? 'rgb(0, 171, 85)' : 'white'}`}} value={5} onClick={handleChange}>Create</Button>
                </div>
                <div className={classes.tab}>
                  <Button style={{borderRight: `2px solid ${(active === 6) ? 'rgb(0, 171, 85)' : 'white'}`}} value={6} onClick={handleChange}>Update</Button>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <div className={classes.boxright}>
        <Container>
          <TabPanel value={value} index={0}>
            <ListCustomer/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ListFood />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CreateFood />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <UpdateFood />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <ListEmployee />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <CreateEmployee />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <UpdateEmployee />
          </TabPanel>
        </Container>
      </div>
    </div>
  );
}

export default Main;
