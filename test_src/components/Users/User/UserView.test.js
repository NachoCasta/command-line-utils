import React from "react";
import { shallow } from "enzyme";

import UserView from "./UserView";

describe("UserView", () => {
    let component;
    beforeEach(() => {
        component = shallow(<UserView />);
    });

    it("renders", () => {
        shallow(<UserView />);
    });

    it("matches snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});
