import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import githubLoader from "./githubLoader.json";
import useGetResponsiveValue from "../../utils/useGetResponsiveValue";

type LoaderProps = {
	style?: React.CSSProperties;
};

export default function Loader({ style }: LoaderProps) {
	const getResponsiveValue = useGetResponsiveValue();

	return (
		<Player
			autoplay
			loop
			src={githubLoader}
			style={
				style
					? style
					: {
							width: getResponsiveValue("300px", "300px", "400px"),
							height: getResponsiveValue("300px", "300px", "400px"),
					  }
			}
		/>
	);
}
