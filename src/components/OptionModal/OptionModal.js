import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { OptionList } from './OptionModal.element';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function OptionModal({ open, setOpen, option }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleListClick = (item) => {
    console.log(item);
    option[1]({ ...option[0], selected: item });
    setOpen(false);
  };

  // 전공은 배열 안 객체가 또 존재해서 함수를 다르게 써야함
  const handleMajorListClick = (item) => {
    console.log(item); // ex) {text: '컴퓨터공학', id: 'WD1111'}
    option[1]({ ...option[0], selected: item.text, code: item.id });
    setOpen(false);
  };

  return (
    <>
      {option[0] ? (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {option[0].type}
          </DialogTitle>
          <DialogContent
            style={{ width: '300px', maxHeight: '500px' }}
            dividers
          >
            <ul>
              {option[0].type !== '전공/영역' && option[0].type !== '검색어'
                ? option[0] &&
                  option[0].data.map((item, index) => (
                    <Typography gutterBottom key={item}>
                      <OptionList onClick={() => handleListClick(item)}>
                        - {item}
                      </OptionList>
                    </Typography>
                  ))
                : option[0] &&
                  option[0].data.map((item, index) => (
                    <Typography gutterBottom key={item.id}>
                      <OptionList onClick={() => handleMajorListClick(item)}>
                        - {item.text}
                      </OptionList>
                    </Typography>
                  ))}
            </ul>
          </DialogContent>
          {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
        </Dialog>
      ) : null}
    </>
  );
}
