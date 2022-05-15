import { Html, Head, Main, NextScript } from "next/document";

function Document() {
	return (
		<Html>
			<Head>
				{/* <link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"
					rel="stylesheet"
				/> */}
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Inter:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default Document;
