import { ApiUrls } from "constants/URLs";
import { IUser } from "models/UsersModels";

const UsersService = {
  GetUsers: (): Promise<IUser[]> => {
    return fetch(ApiUrls.Users)
      .then(response => response.json())
      .then(json => { return json })
      .then(json => {
        //Simulate slow operation
        return new Promise(resolve => {
          setTimeout(() => resolve(json), 2000);
        })
      });
  },
  GetUsersByName: () => {
    console.log("function get users by name");
  }
};

export default UsersService;
