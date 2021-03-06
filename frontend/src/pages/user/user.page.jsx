import React, {useState, useEffect} from 'react';
import { useStyles } from './user.style.page'
import { Container } from '@mui/material'
import Img from './../../assets/images/avt.jpeg'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import axios from 'axios';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
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

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function User() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [newData, setNewData] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const local = JSON.parse(localStorage.getItem("account"));
    const email = local.customer.email;
    const tken = local.token;

    const [data, setData] = useState(
        {
            email: '',
            name: '',
            phone: '',
            username: '',
            password: '',
        }
    );

    const getCustomerInfo = async (e) => {
        try {
            const result = await axios.get(`http://localhost:3300/api/v1/customer/detail/${email}`,
                {
                    headers: {
                        token: tken,
                    }
                }
            );
            setData(result.data);
            setNewData(data);
        }
        catch (error) {
            alert('Kh??ng t???i ???????c d??? li???u ng?????i d??ng!');
        }
    }

    useEffect(() => getCustomerInfo(), []);

    const handleChangeUserInfo = (e) => {
        const { name, value} = e.target;
        setNewData({...newData, [name]: value});
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.put( `http://localhost:3300/api/v1/customer/update/${email}`, newData,
                {
                    headers: {
                        token: tken,
                    },
                },
            );
            alert('C???p nh???t th??nh c??ng!');
            setData(newData);
        } catch (err) {}
    }

    const [pass, setPass] = useState({
        password: '',
    })

    const handleChangePass = (e) => {
        const { name, value } = e.target;
        setPass({...pass, [name]: value});
    }

    const handleUpdatePass = async (e) => {
        e.preventDefault();
        if (pass.password !== document.getElementById('cfpass').value)
        {
            alert("M???t kh???u kh??ng kh???p!");
            return;
        }
        try {
            const result = await axios.put(`http://localhost:3300/api/v1/customer/changepw/${email}`, pass, {
                headers: {
                token: tken,
                },
            })
            alert("Thay ?????i m???t kh???u th??nh c??ng!");
        } catch (err) {}
    }

    return (
        <div className={classes.root}>
            <Container>
                <div style={{height: '130px'}}></div>

                <div className={classes.flexbox}>
                    
                    <div className={classes.box}>
                        <div className={classes.boxleft}>
                            <div className={classes.content}>
                                <div className={classes.avtbox}>
                                    <div className={classes.avt}>
                                        <img src={Img} alt=""></img>
                                    </div>
                                </div>
                                <div>
                                    <h4>{data.name}</h4>
                                </div>
                                <div>
                                    <p>{data.email}</p>
                                    <br/>
                                </div>
                                <div className={classes.boxTabs}>
                                    <Box>
                                        <Tabs
                                            orientation="vertical"
                                            variant="scrollable"
                                            value={value}
                                            onChange={handleChange}
                                            aria-label="Vertical tabs example"
                                            sx={{ borderRight: 1, borderColor: 'divider' }}
                                        >
                                            <Tab label="Th??ng Tin T??i Kho???n" {...a11yProps(0)} />
                                            <Tab label="?????i M???t Kh???u" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                </div>
                            </div>
                        </div>

                        <div className={classes.boxright}>
                            <div className={classes.content}>
                                <TabPanel value={value} index={0}>
                                    <div className={classes.mainBox}>
                                        <form autoComplete="off">
                                            <h3>TH??NG TIN T??I KHO???N</h3>
                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>T??n ????ng nh???p</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input onChange={handleChangeUserInfo} type="text" name="username" placeholder={data.username}></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>H??? v?? t??n</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input onChange={handleChangeUserInfo} type="text" name="name" placeholder={data.name}></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>S??? ??i???n tho???i</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input onChange={handleChangeUserInfo} type="tel" name="phone" placeholder={data.phone}></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Email</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input onChange={handleChangeUserInfo} type="email" name="email" placeholder={data.email}></input>
                                                </div> 
                                            </div>

                                            {/* <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Ng??y sinh</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input type="date" name="date" value="02/05/2001"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Gi???i t??nh</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <RadioGroup
                                                            aria-label="gender"
                                                            defaultValue="female"
                                                            name="sex"
                                                            
                                                    >
                                                        <div className={classes.radio}>
                                                            <FormControlLabel value="female" control={<Radio />} label="N???" />
                                                            <FormControlLabel value="male" control={<Radio />} label="Nam" />
                                                        </div>
                                                    </RadioGroup>
                                                </div> 
                                            </div> */}

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p></p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <Button onClick={handleUpdate} variant="contained" type="submit">
                                                        C???p Nh???t
                                                    </Button>
                                                </div> 
                                            </div>
                                        </form>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <div className={classes.mainBox}>
                                        <form autoComplete="off">
                                            <h3>?????I M???T KH???U</h3>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>M???t kh???u m???i</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input onChange={handleChangePass} type="password" name="password" placeholder="* * * * * * * * *"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Nh???p l???i m???t kh???u</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input type="password" name="cfpass" id="cfpass" placeholder="* * * * * * * * *"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p></p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <Button onClick={handleUpdatePass} variant="contained" type="submit">
                                                        C???p Nh???t
                                                    </Button>
                                                </div> 
                                            </div>
                                        </form>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default User;
