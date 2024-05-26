import Nav from "@/app/_components/nav";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
jest.mock("../../app/seed/menu-seed", () => ({
  MenuSeed: [
    { icon: "dashboard", link: "/dashboard", title: "Dashboard" },
    { icon: "users", link: "/users", title: "Users" },
    { icon: "orders", link: "/orders", title: "Orders" },
    { icon: "settings", link: "/settings", title: "Settings" },
  ],
}));

describe("Page", () => {
  it("renders a heading", () => {
    render(<Nav />);

    const navElement = screen.getByRole("navigation");

    // Verifica as classes fixas e dinâmicas que o elemento <nav> deve ter
    expect(navElement).toHaveClass(
      "relative",
      "flex",
      "justify-center",
      "bg-gray-100",
      "border-r-gray-200",
      "border-r-[1px]",
      "max-w-20",
      "sm:max-w-48",
      "pt-24",
    );

    // Como a classe w-1/4 ou w-20 depende do estado isOpen, você pode verificar uma delas
    // Por padrão, o estado isOpen é verdadeiro, então esperamos 'w-1/4'
    expect(navElement).toHaveClass("w-1/4");
  });
  it("toggles the nav width class when button is clicked", () => {
    render(<Nav />);
    const navElement = screen.getByRole("navigation");
    const toggleButton = screen.getByRole("button");

    // Verifica a classe inicial 'w-1/4'
    expect(navElement).toHaveClass("w-1/4");

    // Clica no botão para mudar o estado
    fireEvent.click(toggleButton);

    // Verifica se a classe mudou para 'w-20'
    expect(navElement).toHaveClass("w-20");
    expect(navElement).not.toHaveClass("w-1/4");

    // Clica novamente para mudar o estado de volta
    fireEvent.click(toggleButton);

    // Verifica se a classe voltou para 'w-1/4'
    expect(navElement).toHaveClass("w-1/4");
    expect(navElement).not.toHaveClass("w-20");
  });

  it("renders menu items with icons and titles", () => {
    render(<Nav />);

    // Verifica se os itens do menu estão presentes
    const dashboardMenuItem = screen.getByText("Dashboard");
    const usersMenuItem = screen.getByText("Users");
    const ordersMenuItem = screen.getByText("Orders");
    const settingsMenuItem = screen.getByText("Settings");

    expect(dashboardMenuItem).toBeInTheDocument();
    expect(usersMenuItem).toBeInTheDocument();
    expect(ordersMenuItem).toBeInTheDocument();
    expect(settingsMenuItem).toBeInTheDocument();
  });
});
