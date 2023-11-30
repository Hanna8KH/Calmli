import React from "react";
import {useLocation, useNavigate} from "react-router-dom"
import {Button} from "@mui/material";

export const SideBarButton = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(props.href);
    }

    const isActive = location.pathname === props.href;

    return (
        <Button onClick={handleClick} startIcon={props.icon} variant={isActive ? 'contained' : "outlined"}
                className={'sidebar-container-href'}>
            {props.title}
        </Button>
    )
}