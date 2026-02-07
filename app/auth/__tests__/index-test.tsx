import { render } from "@testing-library/react-native";
import AuthScreen from "..";

describe("AuthScreen", () => {
  test("Text renders correctly on AuthScreen", () => {
    const { getByText } = render(<AuthScreen />);

    getByText("Auth Screen");
  });
});
