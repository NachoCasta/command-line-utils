import React from "react";
import { shallow } from "enzyme";

import Test2View from "./Test2View";

describe("Test2View", () => {
	let component;
	beforeEach(() => {
		component = shallow(<Test2View />);
	});

	it("renders", () => {
		shallow(<Test2View />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
