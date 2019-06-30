import React from "react";
import { shallow } from "enzyme";

import {{Component}}View from "./{{Component}}View";

describe("{{Component}}View", () => {
	let component;
	beforeEach(() => {
		component = shallow(<{{Component}}View />);
	});

	it("renders", () => {
		shallow(<{{Component}}View />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
