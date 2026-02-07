import { render } from "@testing-library/react-native";

import GoalScreen from "../goals";

describe("GoalScreen", () => {
  it("Text renders correctly on GoalScreen", () => {
    const { getByText } = render(<GoalScreen />);

    getByText("Goals Tab");
  });
});
