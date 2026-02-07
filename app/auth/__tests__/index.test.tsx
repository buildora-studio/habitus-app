import { render } from "@testing-library/react-native";

import AuthScreen from "..";

jest.mock("expo-router", () => ({
  Link: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { View } = require("react-native");
    return <View {...props}>{children}</View>;
  },
}));

describe("AuthScreen", () => {
  it("Text renders correctly on AuthScreen", () => {
    const { getByText } = render(<AuthScreen />);

    getByText("Auth Screen");
    getByText("Go Dashboard");
  });
});
