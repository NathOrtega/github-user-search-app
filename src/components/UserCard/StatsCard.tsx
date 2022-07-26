import styled from "styled-components";
import { useTheme } from "../../contexts/theme";
import { StyledHeading4, StyledHeading3 } from "../designSystem/Typography";
import useGetResponsiveValues from "../utils/useGetResponsiveValue";

type StatsProps = {
	stats: Array<{ title: string; value?: number }>;
};

const Stats = styled.div`
	width: 100%;
	height: 85px;
	margin: 24px 0;
	padding: 18px 14px;
	border-radius: 10px;
	background-color: ${({ theme }) =>
		theme.name === "light" ? theme.neutrals["300"] : theme.neutrals["600"]};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`;

const Stat = styled.div`
	width: fit-content;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export default function StatsCard({ stats }: StatsProps) {
	const { theme } = useTheme();
	const getResposnsiveValues = useGetResponsiveValues();

	return (
		<Stats>
			{stats.map((stat, index) => {
				return (
					<Stat key={index}>
						<StyledHeading4
							fontSize={getResposnsiveValues("13px", "15px", "15px")}
						>
							{stat.title}
						</StyledHeading4>
						<StyledHeading3
							fontSize={getResposnsiveValues("16px", "22px", "22px")}
							fontWeight="bold"
							color={
								theme.name === "light"
									? theme.neutrals["700"]
									: theme.neutrals["100"]
							}
						>
							{stat.value}
						</StyledHeading3>
					</Stat>
				);
			})}
		</Stats>
	);
}
