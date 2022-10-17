import React from "react";
import { useTranslation } from "react-i18next";
import { Chip, List, ListItem, ListItemText, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import ExpandableCard, { CardContent } from "../../components/ExpandableCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	ExperienceDate,
	ExperienceContent,
	experienceSetExpandedCard,
	selectExperienceExpandedCards,
} from "./experienceSlice";

export function ExperienceScreen(): React.ReactElement {
	const theme = useTheme();
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const experienceCards = useAppSelector(selectExperienceExpandedCards);

	function getDate(date?: ExperienceDate): string {
		return t("date.intlDateTime", {
			val: date ? new Date(date.year, date.month - 1) : Date.now(),
			formatParams: {
				val: { year: "numeric", month: "numeric" },
			},
		});
	}

	function getExperienceContents(experienceContents: ExperienceContent[]): CardContent[] {
		const cardContents: CardContent[] = [];

		experienceContents.forEach((experienceContent) => {
			const fixedContent: CardContent = {
				content: (
					<Box>
						<Stack direction="column">
							{t(experienceContent.description)}
							<Box mt={2}>
								{experienceContent.technologies &&
									experienceContent.technologies.map((techno, index) => (
										<Chip
											key={index}
											label={techno}
											sx={{
												marginTop: 1,
												marginRight: 1,
												backgroundColor: "primary.main",
												color: "common.white",
											}}
										/>
									))}
							</Box>
						</Stack>
					</Box>
				),
				isExpandable: false,
			};
			cardContents.push(fixedContent);

			if (experienceContent.details) {
				const expandableContent: CardContent = {
					content: (
						<List
							sx={{
								listStyleType: "disc",
								pl: 4,
							}}
						>
							{experienceContent.details.map((detail, index) => (
								<ListItem key={index} sx={{ display: "list-item", p: 0 }}>
									<ListItemText disableTypography primary={t(detail)} />
								</ListItem>
							))}
						</List>
					),
					isExpandable: true,
				};

				cardContents.push(expandableContent);
			}
		});

		return cardContents;
	}

	return (
		<Grid container spacing={4} padding={theme.spacing(4)}>
			{experienceCards.map((card, index) => (
				<Grid key={index} item xs={12} md={6} lg={4}>
					<ExpandableCard
						title={`${card.company} ${getDate(card.startDate)} -${getDate(card.endDate)}`}
						chip={card.software}
						contents={getExperienceContents(card.contents)}
						isExpanded={card.isExpanded}
						onExpanded={(isExpanded) => {
							dispatch(experienceSetExpandedCard({ key: card.cardId, isExpanded }));
						}}
					/>
				</Grid>
			))}
		</Grid>
	);
}
