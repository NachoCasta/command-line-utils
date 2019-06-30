import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import {{Component}}Container from "./{{Component}}Container";

describe("{{Component}}Container", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<{{Component}}Container />
			</Providers>
		);
	});
	it("renders", () => {
		mount(<{{Component}}Container />);
	});
});
