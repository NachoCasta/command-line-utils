import React from "react";
import { shallow } from "enzyme";

import UserListView from "./UserListView";

describe("UserListView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<UserListView />);
	});

	it("renders", () => {
		shallow(<UserListView />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
