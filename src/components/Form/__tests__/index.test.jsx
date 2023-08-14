import "@testing-library/jest-dom";
import {screen, render, fireEvent} from "@testing-library/react";
import Form from "..";

describe("Form component", () => {
    test("deve retornar string vazia input", () => {
        render(<Form />);
        const input = screen.getByLabelText("Your email address...");
        fireEvent.change(input, {
            target: {
                value: ""
            }
        });
        expect(input.value).toBe("");
    });

    test("deve retornar teste@email.com input", () => {
        render(<Form />);
        const input = screen.getByLabelText("Your email address...");
        fireEvent.change(input, {
            target: {
                value: "teste@email.com"
            }
        });
        expect(input.value).toBe("teste@email.com");
    });

    test("não deve mostrar nenhuma mensagem de erro quando o componente é carregado", () => {
        render(<Form />);
        const alertElement = screen.queryByRole("alert");
        expect(alertElement).not.toBeInTheDocument();
    });

    it("deve mostrar mensagem de erro quando o campo email não for inserido", () => {
        render(<Form />);
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        const alertElement = screen.getByRole("alert");
        expect(alertElement).toBeInTheDocument();
    });

    it("deve mostrar mensagem de sucesso quando o registro for bem-sucedido.", () => {
        render(<Form />);
        const input = screen.getByLabelText("Your email address...");
        fireEvent.change(input, {
            target: {
                value: "teste@email.com"
            }
        });
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        const sucessElement = screen.getByText("Good!");
        expect(sucessElement).toBeInTheDocument();
    });

    it("deve mostrar mensagem de invalido quando o o valor não e email", () => {
        render(<Form />);
        const input = screen.getByLabelText("Your email address...");
        fireEvent.change(input, {
            target: {
                value: "aaa#45612"
            }
        });
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        const sucessElement = screen.queryByRole("alert");
        expect(sucessElement.textContent).toBe("Please provide a valid email address");
    });

    test("renderiza o componente Form corretamente", () => {
        render(<Form />);
        const input = screen.getByLabelText("Your email address...");
        const button = screen.getByRole("button");
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
});


