import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import {{Singular}}ListContainer from "./{{Singular}}ListContainer";

describe("{{Singular}}ListContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<{{Singular}}ListContainer />
			</Providers>
		);
	});
	it("renders", () => {});
});
