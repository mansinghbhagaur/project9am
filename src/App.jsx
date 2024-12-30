// import Users from "./pages/Users";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
// import Content from "./pages/Content";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      {/* <Content /> */}
      {/* <Users /> */}
    </ThemeProvider>
  );
};

export default App;
