import React from "react";
import { shallow } from "enzyme";

import UserListItemView from "./UserListItemView";

describe("UserListItemView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<UserListItemView />);
	});

	it("renders", () => {
		shallow(<UserListItemView />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
