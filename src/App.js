import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style.module.css";

const Home = lazy(() => import("./Page/Home"));
const Edit = lazy(() => import("./Page/Edit"));
const Create = lazy(() => import("./Page/Create"));
const Loader = lazy(() => import("./Component/Loader"));

const SuspensePage = (element) => {
  return (
    <Suspense fallback={<Loader />}>
      {element}
    </Suspense>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies" element={SuspensePage(<Home />)} />
        <Route path="/movies/:id" element={SuspensePage(<Edit />)} />
        <Route path="movies/create" element={SuspensePage(<Create />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;