import { Global, css } from '@emotion/core';
import Head from 'next/head';
import colors from '../styles/colors';

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Cardo&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Global
				styles={css`
					html,
					body {
						margin: 0;
						background-color: ${colors.background};
					}
				`}
			></Global>
			<Component {...pageProps} />
		</>
	);
}

export default App;
