import { render } from "@testing-library/react-native";

import ProfileScreen from "../profile";

describe("ProfileScreen", () => {
  it("Text renders correctly on ProfileScreen", () => {
    const { getByText } = render(<ProfileScreen />);

    getByText("Profile Tab");
  });
});
