import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { Button } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

// 라디오 메뉴
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

const useStyles = makeStyles({
  radioLabel: {
    '& span:first-child': {
      padding: '3px',
    },
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
  const classes = useStyles();
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

  // 검색어(과목명,과목코드..) state
  const [value, setValue] = React.useState('과목명');

  const handleChange = (event) => {
    setValue(event.target.value);
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
            style={{
              width: '400px',
              maxHeight: '500px',
              display: 'flex',
              flexDirection: 'column',
            }}
            dividers
          >
            {option[0].type !== '검색어' ? (
              <ul>
                {option[0].type !== '전공/영역'
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
            ) : (
              <>
                <FormControl component="fieldset" style={{ margin: '0 auto' }}>
                  <RadioGroup value={value} onChange={handleChange} row>
                    <FormControlLabel
                      className={classes.radioLabel}
                      value="과목명"
                      control={<Radio />}
                      label="과목명"
                    />
                    <FormControlLabel
                      className={classes.radioLabel}
                      value="과목번호"
                      control={<Radio />}
                      label="과목코드"
                    />
                    <FormControlLabel
                      className={classes.radioLabel}
                      value="교수명"
                      control={<Radio />}
                      label="교수명"
                    />
                    <FormControlLabel
                      className={classes.radioLabel}
                      value="강의실"
                      control={<Radio />}
                      label="강의실"
                    />
                  </RadioGroup>
                </FormControl>

                <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary">
                    검색
                  </Button>
                </DialogActions>
              </>
            )}
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}
