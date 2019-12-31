import React, { useEffect, useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import userService from "services/UsersService";
import userServiceAxios from "services/UsersServiceAxios";
import { IUser } from "models/UsersModels";
import UsersTable from "components/UsersTable";

const UsersPage: React.FC = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;
		loadAllUsersFromApi();
		return () => {
			isMounted.current = false;
		};
	}, []);

	const loadAllUsersFromApi = () => {
		setUsers([]);
		userService.GetUsers().then(usersData => {
			if (isMounted.current) {
				setUsers(usersData);
			}
		});
	};

	const callANotFoundEndPoint = () => {
		userService
			.GetUserById(999)
			.then(data => {
				console.log("CallANotFoundEndPoint method has finalize!");
			})
			.catch(error => {
				console.log("Ocurrio error", error);
			});
	};

	const callWrongEndPoint = () => {
		userService
			.CallAWrongEndPoint()
			.then(data => {
				console.log("callWrongEndPoint method has finalize!");
			})
			.catch(error => {
				console.log("Ocurrio error", error);
			});
	};

	const callApiAndThrowErrorOnParse = () => {
		userService
			.GetUsersParsingError()
			.then(data => {
				console.log(data);
				console.log("callApiAndThrowErrorOnParse method has finalize");
				setUsers(data);
			})
			.catch(error => {
				console.log("Ocurrio error", error);
			});
	};

	//AXIOS===============================================

	const axiosloadAllUsersFromApi = () => {
		setUsers([]);
		userServiceAxios.GetUsers().then(usersData => {
			if (isMounted.current) {
				setUsers(usersData);
			}
		});
	};

	const axioscallANotFoundEndPoint = () => {
		userServiceAxios
			.GetUserById(999)
			.then(data => {
				console.log("axioscallANotFoundEndPoint method has finalize!");
			})
			.catch(error => {
				console.log("Ocurrio error", error);
			});
	};

	const axioscallWrongEndPoint = () => {
		userServiceAxios
			.CallAWrongEndPoint()
			.then(data => {
				console.log("axioscallWrongEndPoint method has finalize!");
			})
			.catch(error => {
				console.log("Ocurrio error", error);
			});
	};

	const axioscallApiAndThrowErrorOnParse = () => {
		userServiceAxios
			.GetUsersParsingError()
			.then(data => {
				console.log(data);
				console.log("axioscallApiAndThrowErrorOnParse method has finalize");
				setUsers(data);
			})
			.catch(error => {
				console.log("Ocurrio error", error);
			});
	};

	const btnStyle = {
		marginLeft: "10px"
	};

	return (
		<Container>
			<h3>Users</h3>
			<hr />
			<div style={{ marginTop: "20px" }}>
				Fetch
				<Button variant="outline-info" size="sm" style={btnStyle} onClick={loadAllUsersFromApi}>
					Load users data!
				</Button>
				<Button variant="outline-danger" size="sm" style={btnStyle} onClick={callANotFoundEndPoint}>
					Not found endpoint
				</Button>
				<Button variant="outline-danger" size="sm" style={btnStyle} onClick={callWrongEndPoint}>
					Wrong endpoint
				</Button>
				<Button variant="outline-danger" size="sm" style={btnStyle} onClick={callApiAndThrowErrorOnParse}>
					Throw error on parsing response{" "}
				</Button>
			</div>
			<div style={{ marginTop: "20px" }}>
				Axios
				<Button variant="outline-info" size="sm" style={btnStyle} onClick={axiosloadAllUsersFromApi}>
					Load users data!
				</Button>
				<Button variant="outline-danger" size="sm" style={btnStyle} onClick={axioscallANotFoundEndPoint}>
					Not found endpoint
				</Button>
				<Button variant="outline-danger" size="sm" style={btnStyle} onClick={axioscallWrongEndPoint}>
					Wrong endpoint
				</Button>
				<Button variant="outline-danger" size="sm" style={btnStyle} onClick={axioscallApiAndThrowErrorOnParse}>
					Throw error on parsing response{" "}
				</Button>
			</div>
			<div style={{ marginTop: "20px" }}>
				<UsersTable users={users}></UsersTable>
			</div>
		</Container>
	);
};

export default UsersPage;
