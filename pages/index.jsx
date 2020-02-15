import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Nav from '../components/Nav';
import colors from '../styles/colors';

const MainSection = styled.section({
	width: '100%',
	display: 'flex',
	height: '80vh',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	color: colors.foreground
});

const fadeIn = ({ isVisible }) => ({ opacity: isVisible ? '1' : '0' });

const Title = styled.span(
	{
		fontFamily: "'Cardo', serif",
		fontSize: '100px',
		transition: 'opacity 2s ease-in-out',
		opacity: 0,
		marginTop: '20px'
	},
	fadeIn
);
const SubTitle = styled.span(
	{
		fontFamily: "'Cardo', serif",
		fontSize: '30px',
		color: colors.subtext,
		transition: 'opacity 2s ease-in-out',
		marginTop: '30px',
		opacity: 0
	},
	fadeIn
);

const BigCode = styled.span({
	fontSize: '300px'
});

const Home = () => {
	const [displayTitle, setDisplayTitle] = React.useState(false);
	const [displaySubTitle, setDisplaySubTitle] = React.useState(false);
	React.useEffect(() => {
		setDisplayTitle(true);
		setTimeout(() => setDisplaySubTitle(true), 1000);
	}, []);
	return (
		<>
			<Head>
				<title>Bryan Robicheau</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav></Nav>
			<MainSection>
				<BigCode>{'< / >'}</BigCode>
				<Title isVisible={displayTitle}>Bryan Robicheau</Title>
				<SubTitle isVisible={displaySubTitle}>
					Frontend Engineer
				</SubTitle>
			</MainSection>
		</>
	);
};
export default Home;
