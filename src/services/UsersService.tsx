import { ApiUrls } from "constants/URLs";

const UsersService = {
  GetUsers: () => {
    return fetch(ApiUrls.Users)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      });
  },
  GetUsersByName: () => {
    console.log("function get users by name");
  }
};

export default UsersService;
