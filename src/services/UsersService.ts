import { ApiUrls } from "constants/URLs";
import { IUser } from "models/UsersModels";
import { request } from "core/Request";

const UsersService = {
  GetUsers: (): Promise<IUser[]> => {
    return request.get(ApiUrls.Users);
  },
  GetUserById: (id: number): Promise<IUser> => {
    return request.get(`${ApiUrls.Users}${id}/`);
  },
  CallAWrongEndPoint: (): Promise<any> => {
    return request.get("https://httpstat.us/500");
  },
  GetUsersParsingError: (): Promise<IUser[]> => {
    return request.get(ApiUrls.Posts + "1/");
  }
};

export default UsersService;
