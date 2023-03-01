import { ChakraProvider, Box, theme } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import MessageForm from "./components/MessageForm";
import Chat from "./pages/Chat";
import List from "./pages/List";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import TestTesseract from "./pages/TestTesseract";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContextProvider, useAppContext } from "./context/appContext";

function App() {
  const { username, setUsername, routeHash } = useAppContext();

  // resident(住民) or association(自治会) => Headerにpropsで渡して切り替える
  const [attribute, setAttribute] = useState("residents");
  function handleChange(e) {
    setAttribute(attribute === "association" ? "residents" : "association");
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight - 205);
    });
  }, []);

  if (routeHash) {
    if (routeHash.endsWith("&type=recovery")) {
      window.location.replace(`/login/${routeHash}`);
    }
    if (routeHash.startsWith("#error_code=404"))
      return (
        <div>
          <p>This link has expired</p>
          <a href="/" style={{ cursor: "pointer" }} variant="link">
            Back to app
          </a>
        </div>
      );
  }
  return (
    // 若者を表示するか、高齢者を表示するか
    // {
    //   (attribute === 'association') && <Elderly/>
    // }
    // {
    //   (attribute === 'residents') && <Young/>
    // }
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Box>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Header username={username} setUsername={setUsername} />
          <Router>
            <Switch>
              <Route exact path="/">
                <List />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/detail">
                <Detail />
              </Route>
              <Route exact path="/post">
                <Post />
              </Route>
              <Route exact path="/my-page">
                <MyPage />
              </Route>
              <Route exact path="/chat">
                <Chat username={username} />
                <MessageForm />
              </Route>
              <Route exact path="/test">
                <TestTesseract />
              </Route>
              <Route>Not found</Route>
            </Switch>
          </Router>
        </Box>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
