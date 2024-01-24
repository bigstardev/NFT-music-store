import { render } from "@test";

import { Drawer } from "./index";

describe("Drawer component testing with testing-library", () => {

    it("renders without crashing", () => {
        const component = render(
            <Drawer show component={() => <></>} width={430} setDrawerOption={() => {}}/>
        );

        expect(component).toBeTruthy();
    });
});
