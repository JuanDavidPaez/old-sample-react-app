import { ApiUrls } from "constants/URLs";
import { IUser } from "models/UsersModels";
import axios from "axios";
import request from "core/Request";

const UsersServiceAxios = {
	GetUsers: (): Promise<IUser[]> => {
		//Prueba
		request.Talk();
		console.log(request.firstName);
		//
		return axios
			.get(ApiUrls.Users)
			.then(response => response.data)
			.then(json => {
				//Simulate slow operation
				return new Promise(resolve => {
					setTimeout(() => resolve(json), 2000);
				});
			});
	},
	GetUserById: (id: number): Promise<IUser> => {
		return axios.get(`${ApiUrls.Users}${id}/`).then(response => response.data);
	},
	CallAWrongEndPoint: (): Promise<any> => {
		return axios.get("https://httpstat.us/500").then(response => response.data);
	},
	GetUsersParsingError: (): Promise<IUser[]> => {
		return axios.get(ApiUrls.Posts + "1/").then(response => response.data);
	}
};

export default UsersServiceAxios;
