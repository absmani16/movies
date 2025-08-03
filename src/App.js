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
        <Route path="/" element={SuspensePage(<Home />)} />
        <Route path="/:id" element={SuspensePage(<Edit />)} />
        <Route path="/create" element={SuspensePage(<Create />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;