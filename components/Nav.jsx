import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';
import { navLinks, contactAndInfoLinks } from '../data/nav-links';
import colors from '../styles/colors';

const StyledNav = styled.nav({
	margin: 'auto',
	display: 'flex',
	width: '100%',
	justifyContent: 'flex-start',
	textDecoration: 'none'
});

const List = styled.ul({
	listStyleType: 'none',
	display: 'flex',
	justifyContent: 'cetner',
	margin: 0,
	padding: 0
});

const AuxillaryLinks = styled.a({
	fontFamily: 'Verdana, Geneva, sans-serif',
	color: colors.subtext,
	lineHeight: '2.5',
	marginLeft: '30px',
	borderColor: colors.foreground,
	textDecoration: 'none',
	':hover': {
		textDecoration: 'underline',
		cursor: 'pointer'
	}
});

const Nav = (props) => {
	const { pathname } = useRouter();
	console.log(pathname);
	return (
		<StyledNav {...props}>
			<List>
				{navLinks.map(({ href, label }, key) => (
					<li key={key}>
						<Link href={href}>
							<AuxillaryLinks>{label}</AuxillaryLinks>
						</Link>
					</li>
				))}
				{contactAndInfoLinks.map(({ href, label, download }, key) => (
					<li key={key}>
						<AuxillaryLinks
							href={href}
							selected={pathname === href}
						>
							{label}
						</AuxillaryLinks>
					</li>
				))}
			</List>
		</StyledNav>
	);
};

export default Nav;
