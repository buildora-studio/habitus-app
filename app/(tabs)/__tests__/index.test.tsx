import { render } from "@testing-library/react-native";

import DashboardScreen from "..";

describe("DashboardScreen", () => {
  it("Text renders correctly on DashboardScreen", () => {
    const { getByText } = render(<DashboardScreen />);

    getByText("Dashboard Tab");
  });
});
