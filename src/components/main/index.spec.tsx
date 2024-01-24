import { render } from "@test";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {

    it("renders without crashing", () => {
        const component = render(<Main clickConnectWallet={() => {}} clickDisconnectWallet={() => {}} />);

        expect(component).toBeTruthy();
    });
});

