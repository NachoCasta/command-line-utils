import React from "react";
import { shallow } from "enzyme";

import {{Singular}}ListItemView from "./{{Singular}}ListItemView";

describe("{{Singular}}ListItemView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<{{Singular}}ListItemView />);
	});

	it("renders", () => {
		shallow(<{{Singular}}ListItemView />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
