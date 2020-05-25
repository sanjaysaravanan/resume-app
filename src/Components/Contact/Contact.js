import React, { useState } from "react";

import {
  Typography,
  makeStyles,
  Container,
  withStyles,
  Grid,
  Link,
  TextField,
  Button,
  Snackbar,
  Backdrop,
  CircularProgress
} from "@material-ui/core";
import { LinkedIn, Instagram } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";

import Hackerrank from "../../assets/images/hackerrank-brands.svg";
import Header from "../Header/HeaderComponent";
import { sendMail } from "../../api/Notification/Notification";
import { links, contacts } from "../../utils/Details";

const useStyles = makeStyles(theme => ({
  contactRoot: {
    textAlign: "start",
    paddingLeft: "48px",
    paddingRight: "48px",
    paddingTop: "10%",
    paddingBottom: "5%"
  },
  leftBottom: {
    paddingTop: "20%"
  },
  leftMain: {},
  rightForm: {
    width: "100%"
  },
  input: {
    color: "white"
  },
  customTextField: {
    top: 5,
    borderRadius: 0,
    backgroundColor: "#E83556"
  },
  textField: {
    marginTop: 10
  },
  boxButton: {
    display: "flex",
    justifyContent: "flex-end",
    flexBasis: "100%",
    padding: "15px 0",
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "none"
    }
  },
  navigationLink: {
    color: "#000",
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "none"
    }
  },
  hackerrankIconDiv: {
    height: 35,
    width: 35
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const CssTextField = withStyles({
  root: {
    borderRadius: 0,
    backgroundColor: "#E83556",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 0
      },
      "&:hover fieldset": {
        borderRadius: 0
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
        borderRadius: 0
      }
    }
  }
})(TextField);

export default function() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const [backDropOpen, setBackDropOpen] = React.useState(false);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setBackDropOpen(true);
    sendMail({ name, email, phone, message })
      .then(() => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setBackDropOpen(false);
        setOpen(true);
      })
      .catch(er => {
        console.log(er);
        setBackDropOpen(false);
      });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Header tab="contact" />
      <Backdrop
        className={classes.backdrop}
        open={backDropOpen}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container className={classes.contactRoot} fixed>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={classes.leftMain}>
              <Typography variant="h2">CONTACT</Typography>
              <div className={classes.leftBottom}>
                <Link color="inherit" href={links.linkedIn} target="_blank">
                  <LinkedIn fontSize="large" />
                </Link>
                <Link color="inherit" href={links.instagram} target="_blank">
                  <Instagram fontSize="large" />
                </Link>
                <Link color="inherit" href={links.hackerrank} target="_blank">
                  <img
                    src={Hackerrank}
                    alt="hackerrank-icon"
                    className={classes.hackerrankIconDiv}
                  />
                </Link>
              </div>
              <div>
                <strong>Cell</strong> {contacts.phoneOne}
              </div>
              <div>
                <strong>Email</strong> {contacts.mailId}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            Looking forward to answering your message,
            <div className={classes.rightForm}>
              <form id="messageMail" autoComplete="off" onSubmit={onSubmit}>
                <CssTextField
                  label=""
                  variant="outlined"
                  size="small"
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={name}
                  fullWidth
                  InputProps={{ className: classes.input }}
                  className={classes.textField}
                  onChange={handleNameChange}
                />
                <CssTextField
                  label=""
                  variant="outlined"
                  size="small"
                  required
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  fullWidth
                  InputProps={{ className: classes.input }}
                  className={classes.textField}
                  onChange={handleEmailChange}
                />
                <CssTextField
                  label=""
                  variant="outlined"
                  size="small"
                  type="tel"
                  value={phone}
                  name="phone"
                  placeholder="Phone"
                  fullWidth
                  inputProps={{
                    pattern: "[0-9]{10}"
                  }}
                  InputProps={{ className: classes.input }}
                  className={classes.textField}
                  onChange={handlePhoneChange}
                />
                <CssTextField
                  label=""
                  variant="outlined"
                  multiline
                  rows={4}
                  value={message}
                  name="message"
                  size="small"
                  placeholder="Type your message..."
                  fullWidth
                  InputProps={{ className: classes.input }}
                  className={classes.textField}
                  onChange={handleMessageChange}
                />
                <div className={classes.boxButton}>
                  <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Thanks for submitting !
                    </Alert>
                  </Snackbar>
                  <Button type="submit">
                    <div className={classes.navigationLink}>
                      <Typography variant="h5">Submit</Typography>
                    </div>
                  </Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
