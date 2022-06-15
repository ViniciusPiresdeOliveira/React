import React from "react";
import { Root } from "./Routes/root"
import { Contexto } from "./Context/data"

export const App = () => {
  return (
    <>
      <Contexto>
        <Root />
      </Contexto>
    </>
  );
}

export default App;