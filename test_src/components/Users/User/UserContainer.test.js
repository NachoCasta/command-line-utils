import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import UserContainer from "./UserContainer";

describe("UserContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<UserContainer />
			</Providers>
		);
	});
	it("renders", () => {
		mount(<UserContainer />);
	});
});
