import React from "react";
import { mount } from "enzyme";

import Providers from "../../User/node_modules/components/App/Providers";
import UserListItemContainer from "./UserListItemContainer";

describe("UserListItemContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<UserListItemContainer />
			</Providers>
		);
	});
	it("renders", () => {
		mount(<UserListItemContainer />);
	});
});
