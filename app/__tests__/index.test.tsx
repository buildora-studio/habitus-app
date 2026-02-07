import { render, screen } from "@testing-library/react-native";

import RootScreen from "../index";

jest.mock("expo-router", () => ({
  Redirect: ({ href }: { href: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Text } = require("react-native");
    return <Text testID="redirect">{href}</Text>;
  },
}));

describe("RootScreen", () => {
  render(<RootScreen />);

  it("redirects to /auth", () => {
    const redirect = screen.getByTestId("redirect");
    expect(redirect).toHaveTextContent("/auth");
  });
});
