import { BrowserRouter } from "react-router-dom";
import { ScrollToTop, SnackbarMessage } from "./components";
import { MessageContainer } from "./context/message-context";
import UserContainer from "./context/user-context";
import Routes from "./routes";

function App() {
  return (
    <MessageContainer>
      <BrowserRouter>
        <ScrollToTop />
        <UserContainer>
          <Routes />
        </UserContainer>
      </BrowserRouter>
      <SnackbarMessage />
    </MessageContainer>
  );
}

export default App;
