import React, { useState } from "react";

import {
  Typography,
  makeStyles,
  Container,
  withStyles,
  Grid,
  Link,
  TextField,
  Button
} from "@material-ui/core";
import { LinkedIn, Instagram } from "@material-ui/icons";

import Header from "../Header/HeaderComponent";

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
  }
}));

const CssTextField = withStyles({
  root: {
    borderRadius: 0,
    backgroundColor: "#E83556",
    "& .MuiOutlinedInput-root": {
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
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState("");

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
    console.log(name, email, phone, message);
  };
  return (
    <>
      <Header tab="contact" />
      <Container className={classes.contactRoot} fixed>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={classes.leftMain}>
              <Typography variant="h2">CONTACT</Typography>
              <div className={classes.leftBottom}>
                <Link
                  color="inherit"
                  href="https://www.linkedin.com/in/sanjaysaravanan21/"
                  target="_blank"
                >
                  <LinkedIn fontSize="large" />
                </Link>
                <Link
                  color="inherit"
                  href="https://www.instagram.com/sanjaysaravanan_21/"
                  target="_blank"
                >
                  <Instagram fontSize="large" />
                </Link>
              </div>
              <div>
                <strong>Cell</strong> 9790889427
              </div>
              <div>
                <strong>Email</strong> sanjaysaravanan38@gmail.com
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
                  name="message"
                  size="small"
                  placeholder="Type your message..."
                  fullWidth
                  InputProps={{ className: classes.input }}
                  className={classes.textField}
                  onChange={handleMessageChange}
                />
                <div className={classes.boxButton}>
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
