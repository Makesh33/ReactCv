import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Stack, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

import Card from "../../components/Card";

export default function ContactScreen(): React.ReactElement {
	const theme = useTheme();
	const { t } = useTranslation();

	const sxLink = {
		underline: "hover",
		ml: 2,
		color: "primary.A200",
	};

	return (
		<Box padding={theme.spacing(4)}>
			<Card
				title={t("contact.title")}
				content={
					<Box>
						<Stack direction="row">
							<PlaceIcon />
							<Link
								href={`https://www.google.com/maps/place/33380+Mios/@44.6103656,-1.031422,11z/data=!3m1!4b1!4m5!3m4!1s0xd54936e3d54a2ad:0x903d6029bdcd3bcc!8m2!3d44.605389!4d-0.939625`}
								target="_blank"
								sx={sxLink}
							>
								{t("contact.adress")}
							</Link>
						</Stack>
						<Stack direction="row" mt={theme.spacing(2)}>
							<PhoneAndroidIcon />
							<Link href={`tel://t("contact.phone")}`} target="_blank" sx={sxLink}>
								{t("contact.phone")}
							</Link>
						</Stack>
						<Stack direction="row" mt={theme.spacing(2)}>
							<MailIcon />
							<Link href={`mailto://${t("contact.mail")}`} target="_blank" sx={sxLink}>
								{t("contact.mail")}
							</Link>
						</Stack>
						<Stack direction="row" mt={theme.spacing(2)}>
							<LinkedInIcon />
							<Link href={`http://${t("contact.linkedin")}`} target="_blank" sx={sxLink}>
								{t("contact.linkedin")}
							</Link>
						</Stack>
					</Box>
				}
			/>
		</Box>
	);
}
