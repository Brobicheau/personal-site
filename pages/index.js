import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

const MainSection = styled.section({
	height: '80vh',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
});

const Title = styled.span(
	{
		font: 'Stencil Std, fantasy',
		fontSize: '100px',
		transition: 'opacity 2s ease-in-out',
		opacity: 0
	},
	({ isVisible }) => ({ opacity: isVisible ? '1' : '0' })
);
const SubTitle = styled.span(
	{
		font: 'Stencil Std, fantasy',
		fontSize: '75px',
		transition: 'opacity 2s ease-in-out',
		opacity: 0
	},
	({ isVisible }) => ({ opacity: isVisible ? '1' : '0' })
);

const LinkSection = styled.div({
	width: '50%',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',
	marginTop: '20px'
});

const Home = () => {
	const [displayTitle, setDisplayTitle] = React.useState(false);
	const [displaySubTitle, setDisplaySubTitle] = React.useState(false);
	React.useEffect(() => {
		setDisplayTitle(true);
		setTimeout(() => setDisplaySubTitle(true), 1000);
	}, []);
	return (
		<div>
			<Global
				styles={css`
					html,
					body {
						margin: 0;
					}
				`}
			></Global>
			<Head>
				<title>Bryan Robicheau</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainSection>
				<Title isVisible={displayTitle}>Bryan Robicheau</Title>
				<SubTitle isVisible={displaySubTitle}>
					Frontend Engineer, Albany NY
				</SubTitle>
				<LinkSection>
					<a href="https://github.com/brobicheau">
						<img src="/GitHub-Mark-64px.png"></img>
					</a>
					<a href="https://linkedin.com/in/bryan-robicheau">
						<img src="/linkedin64.png"></img>
					</a>
				</LinkSection>
			</MainSection>
		</div>
	);
};
export default Home;
