import React from "react";
import { mount } from "enzyme";
import Providers from "components/App/Providers";
import {{Plural}}Container from "./{{Plural}}Container";

describe("{{Plural}}Container", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<{{Plural}}Container />
			</Providers>
		);
	});
	it("renders", () => {});
});
