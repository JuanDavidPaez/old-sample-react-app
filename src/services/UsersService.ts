import { ApiUrls } from "constants/URLs";
import { IUser } from "models/UsersModels";

const UsersService = {
	GetUsers: (): Promise<IUser[]> => {
		return fetch(ApiUrls.Users)
			.then(response => response.json())
			.then(json => {
				return json;
			})
			.then(json => {
				//Simulate slow operation
				return new Promise(resolve => {
					setTimeout(() => resolve(json), 2000);
				});
			});
	},
	GetUserById: (id: number): Promise<IUser> => {
		return fetch(`${ApiUrls.Users}${id}/`)
			.then(response => response.json())
			.then(json => {
				return json;
			});
	},
	CallAWrongEndPoint: (): Promise<any> => {
		return fetch("https://httpstat.us/500")
			.then(response => response.json())
			.then(json => {
				return json;
			});
	},
	GetUsersParsingError: (): Promise<IUser[]> => {
		return fetch(ApiUrls.Posts + "1/")
			.then(response => response.json())
			.then(json => {
				return json;
			});
	}
};

export default UsersService;
