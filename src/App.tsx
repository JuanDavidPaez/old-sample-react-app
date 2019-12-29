import React from "react";
import Header from "components/Header";
import AppRouter from "pages/AppRouter";

const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <hr />
      <AppRouter></AppRouter>
    </>
  );
};

export default App;
