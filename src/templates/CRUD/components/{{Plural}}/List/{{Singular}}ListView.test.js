import React from "react";
import { shallow } from "enzyme";

import {{Singular}}ListView from "./{{Singular}}ListView";

describe("{{Singular}}ListView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<{{Singular}}ListView />);
	});

	it("renders", () => {
		shallow(<{{Singular}}ListView />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
