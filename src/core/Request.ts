import axios, { AxiosInstance } from "axios";

const Request = {
	firstName: "JuanD" as string,
	Talk: () => {
		console.log("Im talking...");
	}
};

const Requestfn = function() {
	const firstName: string = "JuanD";
	const Talk = () => {
		console.log("Im talking..." + firstName);
	};

	return { firstName, Talk };
};

const request = Requestfn();
console.log("imported");

export default request;
