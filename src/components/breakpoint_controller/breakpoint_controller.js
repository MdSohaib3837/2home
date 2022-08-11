import React from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

export default function BreakpointController(props) {
    const theme = useTheme();
    const { breakpoint, direction } = props;
    const query = useMediaQuery(direction === "up" ? theme.breakpoints.up(breakpoint) : theme.breakpoints.down(breakpoint))

    return(
        <>
            {!query && props.children}
        </>
    )
}

BreakpointController.defaultProps = {
    breakpoint: "xs",
    direction: "down"
}

BreakpointController.propTypes = {
    breakpoint: PropTypes.string,
    direction: PropTypes.string
}