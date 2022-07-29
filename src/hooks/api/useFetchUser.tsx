import React from "react";
import User from "../../types/User";

type FetchUserArgs = {
	username: string;
	onSuccess: (user: User) => void;
};

const useFetchUser = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [error, setError] = React.useState("");

	const fetchUser = ({ username, onSuccess }: FetchUserArgs) => {
		setIsLoading(true);
		return fetch(`https://api.github.com/users/${username}`)
			.then((data) => data.json())
			.then((data) => onSuccess(data))
			.catch(() => setError("Something went wrong!"))
			.finally(() => setIsLoading(false));
	};

	return { fetchUser, isLoading, error };
};

export default useFetchUser;
