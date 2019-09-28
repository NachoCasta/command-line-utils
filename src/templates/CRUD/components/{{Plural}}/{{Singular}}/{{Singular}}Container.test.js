import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import {{Singular}}Container from "./{{Singular}}Container";

describe("{{Singular}}Container", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<{{Singular}}Container />
			</Providers>
		);
	});
	it("renders", () => {});
})