import React from "react";
import { mount } from "enzyme";

import Providers from "../User/node_modules/components/App/Providers";
import UserListContainer from "./UserListContainer";

describe("UserListContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<UserListContainer />
			</Providers>
		);
	});
	it("renders", () => {
		mount(<UserListContainer />);
	});
});
