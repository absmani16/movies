import { Suspense, lazy, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Context, initialState, reducer } from "./action";
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
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={SuspensePage(<Home />)} />
          <Route path="/movies/:id" element={SuspensePage(<Edit />)} />
          <Route path="/movies/create" element={SuspensePage(<Create />)} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;