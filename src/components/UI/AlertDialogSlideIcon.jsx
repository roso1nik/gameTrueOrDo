import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { IconButton, Tooltip } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlideIcon({icon, title, textTITLE, textDESC}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip 
        title={title}
        arrow
      >
      <IconButton
          variant="outlined"
          className="nobg-button noborder"
          onClick={handleClickOpen}
        >
          {icon}
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="alert-box"
      >
        <DialogTitle>{`${textTITLE}`}</DialogTitle>
        <DialogContent className="flex-row gap-0">
          <p>{textDESC}</p>
          {/* <DialogContentText id="alert-dialog-slide-description">
             скоро онлайн(наверное)
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}