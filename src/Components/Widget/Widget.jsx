import React from 'react';
import './Widget.scss';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {

    let data;
    
    //temporary
    const amount = 100;
    const diff =  20;


    switch(type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)"
                }}/>
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className="icon" style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(245, 213, 39, 0.26)"
                }}/>
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon" style={{
                    color: "green",
                    backgroundColor: "rgba(101, 245, 39, 0.39)"
                }}/>
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{
                    color: "purple",
                    backgroundColor: "rgba(39, 71, 245, 0.26)"
                }}/>
            };
            break;    
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage negative">
                    <ArrowDropUpOutlinedIcon/>
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;