import "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  const routeComponents = routes.map(({ path, element }, key) => (
    <Route exact path={path} element={element} key={key} />
  ));

  return (
    <>
      <BrowserRouter basename="/see-events">
        <Routes>{routeComponents}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
