import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import Home from "../src/Components/Home/Home";
import Footer from "../src/Components/Footer/Footer";
import NavSelector from "../src/container/NavSelector/NavSelector";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#61D0D4",
      dark: "#b2b2b2",
      light: "#61D0D4"
    },
    secondary: {
      main: "#e65a14",
      dark: "#a13e0e",
      light: "#eb7b43"
    },
    background: { default: "#f9fafb" }
  },
  typography: {
    fontFamily: ["noticia text", "serif"].join(",")
  }
});

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="root">
          <div className="main">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:tab" component={NavSelector} />
                <Route
                  path="*"
                  render={() => (
                    <div
                      style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3em",
                        color: "#cecece"
                      }}
                    >
                      No Found
                    </div>
                  )}
                />
              </Switch>
            </Router>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
