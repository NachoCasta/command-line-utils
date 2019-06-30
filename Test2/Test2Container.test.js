import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import Test2Container from "./Test2Container";

describe("Test2Container", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<Test2Container />
			</Providers>
		);
	});
	it("renders", () => {
		mount(<Test2Container />);
	});
});
