import React from "react";
import { mount } from "enzyme";

import Providers from "./List/node_modules/components/App/Providers";
import UsersContainer from "./UsersContainer";

describe("UsersContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<UsersContainer />
			</Providers>
		);
	});
	it("renders", () => {
		mount(<UsersContainer />);
	});
});
