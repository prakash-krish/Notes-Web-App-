import React from "react"

function Footer(){

	const dynamicYear = new Date().getFullYear();
	return (
		<div>
			<footer>
				<p>
					Copyright © {dynamicYear}
				</p>
			</footer>
		</div>
	);
}
export default Footer;