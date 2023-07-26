import { Button, IconButton, Popover, Typography } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <ul
      style={{
        listStyle: "none",
        display: "inline-flex",
      }}
    >
      <li>
        <Link href="#">
          <IconButton onClick={handleClick}>
            <MenuIcon color="error" />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Button color="secondary">
              <Typography
                sx={{ textTransform: "capitalize", fontWeight: 600, p: 1 }}
              >
                Book Now
              </Typography>
            </Button>
          </Popover>
        </Link>
      </li>
    </ul>
  );
}
