import Slide from "@mui/material/Slide";
import AnimatedPlaytbtn from "./AnimatedPlaytbtn.json";
import Lottie from "lottie-react";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Youtube from "react-youtube";
import "./index.css";

const videoId = "VhBl3dHT5SY";

const opts = {
  height: "360",
  width: "840",
  playerVars: {
    autoplay: 0, // Set to 1 for autoplay
    controls: 1, // Show video controls
    showinfo: 1, // Show video title and uploader
  },
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{ outline: "none", border: "none", marginBottom: "50px" }}
      >
        <Lottie
          className="home-play-lottie-btn"
          animationData={AnimatedPlaytbtn}
        />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Video
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Youtube videoId={videoId} opts={opts} />
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
