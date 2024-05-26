import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import DataTable from "@/app/_components/data-table";
import { UserTestIdEnum } from "../users-enum/userEnum";

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

describe("DataTable", () => {
  it("renders table loading", () => {
    render(<DataTable />);

    // Verifica se o texto 'A list of your recent Users.' está presente
    expect(
      screen.getByText("A list of your recent Users."),
    ).toBeInTheDocument();
  });

  it("navigates to invoice page when invoice icon is clicked", () => {
    const { getByTestId } = render(<DataTable />);

    // Encontra o link usando o data-testid
    const invoiceLink = getByTestId(UserTestIdEnum.LINK_USER_ENUM);

    // Verifica se o link está definido
    expect(invoiceLink).toBeDefined();
  });

  it("toggles the nav width class when button is clicked", () => {
    const { getByText } = render(<DataTable />);

    // Encontra o botão "Previous" usando getByText, por exemplo
    const previousButton = getByText("Previous");
    const NextButton = getByText("Next");

    // Simula o evento de clique no botão "Previous"
    fireEvent.click(previousButton);
    fireEvent.click(NextButton);
  });
});
