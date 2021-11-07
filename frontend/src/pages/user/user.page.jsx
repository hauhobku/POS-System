import React from 'react';
import { useStyles } from './user.style.page'
import { Container } from '@mui/material'
import Img from './../../assets/images/avt.jpeg'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Button } from '@mui/material';

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                                    <h4>Nguyen Van Minh</h4>
                                </div>
                                <div>
                                    <p>nguyenminh@gmail.com</p>
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
                                            <Tab label="Thông Tin Tài Khoản" {...a11yProps(0)} />
                                            <Tab label="Đổi Mật Khẩu" {...a11yProps(1)} />
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
                                            <h3>THÔNG TIN TÀI KHOẢN</h3>
                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Tên đăng nhập</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <p>nguyenvanminh</p>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Họ và tên</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input type="text" name="name" placeholder="Nguyễn Văn Minh"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Số điện thoại</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input type="tel" name="phone" placeholder="0166 666 666"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Email</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input type="email" name="email" placeholder="nguyenminh@gmail.com"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Ngày sinh</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input type="date" name="date" value="02/05/2001"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Giới tính</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <RadioGroup
                                                            aria-label="gender"
                                                            defaultValue="female"
                                                            name="sex"
                                                            
                                                    >
                                                        <div className={classes.radio}>
                                                            <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                                                            <FormControlLabel value="male" control={<Radio />} label="Nam" />
                                                        </div>
                                                    </RadioGroup>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p></p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <Button variant="contained" type="submit">
                                                        Cập Nhật
                                                    </Button>
                                                </div> 
                                            </div>
                                        </form>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <div className={classes.mainBox}>
                                        <form autoComplete="off">
                                            <h3>ĐỔI MẬT KHẨU</h3>
                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Mật khẩu cũ</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input type="password" name="oldpass" placeholder="* * * * * * * * *"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Mật khẩu mới</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input type="password" name="newpass" placeholder="* * * * * * * * *"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p>Nhập lại mật khẩu</p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <input type="password" name="newpass" placeholder="* * * * * * * * *"></input>
                                                </div> 
                                            </div>

                                            <div className={classes.item}>
                                                <div className={classes.leftitem}>
                                                    <p></p>
                                                </div>
                                                <div className={classes.rightitem}>
                                                    <Button variant="contained" type="submit">
                                                        Cập Nhật
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
