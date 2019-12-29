import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import UsersPage from "pages/UsersPage";
import PostsPage from "pages/PostsPage";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/users">
        <UsersPage />
      </Route>
      <Route path="/posts">
        <PostsPage />
      </Route>
    </Switch>
  );
};

export default AppRouter;
