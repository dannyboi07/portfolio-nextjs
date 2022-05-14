import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledNavLink, StyledNavCtn } from "./styledComponents/StyledNavbar";

function Navbar() {
	const router = useRouter();
	const navRef = useRef(null);

	useEffect(() => {
		if (router.asPath !== "/") router.replace("/");
		// if (routePath === "#about") {
		// 	document.getElementById("nav-link-1").click();
		// } else if (routePath === "#projects") {
		// 	document.getElementById("nav-link-2").click();
		// } else if (routePath === "#contact") {
		// 	document.getElementById("nav-link-3").click();
		// }
	}, []);

	function handleClick(e) {
		Array.from(navRef.current.children).forEach((childLi) => {
			if (
				e.target.nodeName === "A" &&
				e.target.id === childLi.children[0].id
			) {
				// window.location.hash = ""
				childLi.children[0].setAttribute("data-active", true);
			} else if (e.target.nodeName === "A") {
				// console.log(e.target.id, childLi.children[0].id);
				childLi.children[0].setAttribute("data-active", false);
			}
		});
	}

	return (
		<StyledNavCtn>
			<ul style={{ margin: 0 }} onClick={handleClick} ref={navRef}>
				<li>
					<Link href="#about">
						<StyledNavLink data-active id="nav-link-1" type="dark">
							About Me
						</StyledNavLink>
					</Link>
				</li>
				<li>
					<Link href="#projects">
						<StyledNavLink id="nav-link-2" type="dark">
							Projects
						</StyledNavLink>
					</Link>
				</li>
				<li>
					<Link href="#contact">
						<StyledNavLink id="nav-link-3" type="dark">
							Contact Me
						</StyledNavLink>
					</Link>
				</li>
			</ul>
		</StyledNavCtn>
	);
}

export default Navbar;
