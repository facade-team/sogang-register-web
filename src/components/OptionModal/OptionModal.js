import React, { useCallback, useEffect } from 'react';
import useInput from '../../hooks/useInput';
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

import { OptionList, KeywordInputContainer } from './OptionModal.element';

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
    display: 'flex',
    justifyContent: 'space-between',
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
  const [searchBy, setSearchBy] = React.useState('과목명');

  // keyword 인풋
  const [keyword, onChangeKeyword, setKeyword] = useInput({
    subjectName: '',
    subjectCode: '',
    profName: '',
    classRoom: '',
  });

  const { subjectName, subjectCode, profName, classRoom } = keyword;

  const handleChange = (event) => {
    // 기존 입력 초기화
    setKeyword({
      subjectName: '',
      subjectCode: '',
      profName: '',
      classRoom: '',
    });
    setSearchBy(event.target.value);
  };

  const handleSearch = () => {
    console.log(searchBy, keyword);
    if (searchBy === '과목명') {
      option[1]({ ...option[0], searchBy, selected: keyword.subjectName });
    } else if (searchBy === '과목번호') {
      option[1]({ ...option[0], searchBy, selected: keyword.subjectCode });
    } else if (searchBy === '교수진') {
      option[1]({ ...option[0], searchBy, selected: keyword.profName });
    } else if (searchBy === '강의실') {
      option[1]({ ...option[0], searchBy, selected: keyword.classRoom });
    }

    setOpen(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && open) {
        e.preventDefault();
        setOpen(false);
      } else if (e.key === 'Enter' && open && option[0].type === '검색어') {
        e.preventDefault();
        handleSearch();
        // setOpen(false);
      }
    },
    [setOpen, open, handleSearch]
  );

  useEffect(() => {
    document.addEventListener('keypress', keyPress);
    return () => {
      document.removeEventListener('keypress', keyPress);
    };
  }, [keyPress]);

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
                  <RadioGroup value={searchBy} onChange={handleChange} row>
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
                      value="교수진"
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
                  <KeywordInputContainer>
                    {searchBy === '과목명' ? (
                      <input
                        type="text"
                        name="subjectName"
                        value={subjectName}
                        onChange={onChangeKeyword}
                        autoFocus
                        placeholder="ex) 미적분학1"
                      ></input>
                    ) : null}
                    {searchBy === '과목번호' ? (
                      <input
                        type="text"
                        name="subjectCode"
                        value={subjectCode}
                        onChange={onChangeKeyword}
                        autoFocus
                        placeholder="ex) CSE2035"
                      ></input>
                    ) : null}
                    {searchBy === '교수진' ? (
                      <input
                        type="text"
                        name="profName"
                        value={profName}
                        onChange={onChangeKeyword}
                        autoFocus
                        placeholder="교수명"
                      ></input>
                    ) : null}
                    {searchBy === '강의실' ? (
                      <input
                        type="text"
                        name="classRoom"
                        value={classRoom}
                        onChange={onChangeKeyword}
                        autoFocus
                        placeholder="ex) J, J관, J107..."
                      ></input>
                    ) : null}
                  </KeywordInputContainer>
                  <Button type="submit" onClick={handleSearch} color="primary">
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
