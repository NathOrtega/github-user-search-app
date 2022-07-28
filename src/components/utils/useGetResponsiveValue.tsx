import { down, between } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";

export default function useGetResponsiveValue() {
	const isMobile = useBreakpoint(down("md"));
	const isTablet = useBreakpoint(between("md", "lg"));

	const getResponsiveValue = (
		mobile: string,
		tablet: string,
		desktop: string
	) => {
		if (isMobile) {
			return mobile;
		} else if (isTablet) {
			return tablet;
		} else {
			return desktop;
		}
	};

	return getResponsiveValue;
}
