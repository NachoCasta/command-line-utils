import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import {{Singular}}ListItemContainer from "./{{Singular}}ListItemContainer";

describe("{{Singular}}ListItemContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<{{Singular}}ListItemContainer />
			</Providers>
		);
	});
	it("renders", () => {});
});
