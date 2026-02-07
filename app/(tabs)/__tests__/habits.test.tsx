import { render } from "@testing-library/react-native";

import HabitScreen from "../habits";

describe("HabitsScreen", () => {
  it("Text renders correctly on HabitsScreen", () => {
    const { getByText } = render(<HabitScreen />);

    getByText("Habits Tab");
  });
});
