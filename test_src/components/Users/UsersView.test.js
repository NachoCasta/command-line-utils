import React from "react";
import { shallow } from "enzyme";

import UsersView from "./UsersView";

describe("UsersView", () => {
    let component;
    beforeEach(() => {
        component = shallow(<UsersView />);
    });

    it("renders", () => {
        shallow(<UsersView />);
    });

    it("matches snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});
