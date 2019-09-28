import React from "react";
import { shallow } from "enzyme";

import {{Singular}}View from "./{{Singular}}View";

describe("{{Singular}}View", () => {
    let component;
    beforeEach(() => {
        component = shallow(<{{Singular}}View />);
    });

    it("renders", () => {
        shallow(<{{Singular}}View />);
    });

    it("matches snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});
