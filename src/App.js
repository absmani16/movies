import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style.module.css";

const Home = lazy(() => import("./Page/Home"));
const Edit = lazy(() => import("./Page/Edit"));
const Add = lazy(() => import("./Page/Add"));
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
        <Route path="/home" element={SuspensePage(<Home />)} />
        <Route path="/home/:id" element={SuspensePage(<Edit />)} />
        <Route path="/home/create" element={SuspensePage(<Add />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
