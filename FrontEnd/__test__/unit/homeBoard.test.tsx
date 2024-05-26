import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import HomeBoard from "@/app/(routes)/(home)/_component/home-board";
import { mockUser } from "@/__mock__/mockuser";

import { useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => {
  const { mockDashBoardDTO } = require("../../__mock__/mockDashBoardDTO"); // Importação de mockUser
  return {
    __esModule: true,
    useQuery: jest.fn((options) => {
      console.log("Returning mockUser:", mockUser); // Adicionando console.log
      return {
        isPending: false,
        isError: false,
        error: null,
        data: mockDashBoardDTO,
        ...options,
      };
    }),
  };
});

jest.mock("../../app/contexts/user-context", () => {
  const { mockUser } = require("../../__mock__/mockuser"); // Importação de mockUser
  return {
    __esModule: true,
    useUser: jest.fn(() => {
      console.log("Returning mockUser:", mockUser); // Adicionando console.log
      return { isLoading: false, user: mockUser };
    }),
  };
});

jest.mock("@tanstack/react-query");

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("HomeBoard", () => {
  it("renders home board", () => {
    render(<HomeBoard />);

    // Verifica se os elementos da home board estão presentes com base nos dados mockados
    expect(screen.getByText("Overview KWH")).toBeInTheDocument();
    expect(screen.getByText("Recent Expenses")).toBeInTheDocument();
  });
});
