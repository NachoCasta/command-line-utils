import React from "react";
import { shallow } from "enzyme";

import {{Plural}}View from "./{{Plural}}View";

describe("{{Plural}}View", () => {
    let component;
    beforeEach(() => {
        component = shallow(<{{Plural}}View />);
    });

    it("renders", () => {
        shallow(<{{Plural}}View />);
    });

    it("matches snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});
