import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "../components/TransactionCreateStepTwo";

describe("TransactionCreateStepTwo", () => {
  test("Should render TransactionCreateStepTwoComponent with correct props", () => {
    // Podemos mockar a implementação das propriedades do componente
    const sender = {
      id: "any_id",
    };

    const receiver = {
      id: "any_id",
    };
    render(<TransactionCreateStepTwo sender={sender} receiver={receiver} />);
    // é uma forma de debugar o componente
    screen.debug();
  });

  test("on initial render, the pay button must be disabled", async () => {
    const sender = {
      id: "any_id",
    };

    const receiver = {
      id: "any_id",
    };
    render(<TransactionCreateStepTwo sender={sender} receiver={receiver} />);
    // Estamos fazendo o target do botão pay
    // Uma forma interessante de se fazer os testes é fazer o posto do que eles fazem para testar a funcionalidade.
    // Em alguns casos vamos precisar adicionar teste asynchronos o findByRole é a nossa melhor opção
    expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
  });

  test("if a amount and note is field, the pay button must be enabled", async () => {
    const sender = {
      id: "any_id",
    };

    const receiver = {
      id: "any_id",
    };
    render(<TransactionCreateStepTwo sender={sender} receiver={receiver} />);
    // o userevent é um módulo que nos permite testar as ações do usuário
    // Podemos mockar os vamos nos componentes para realizar os testes.
    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
    expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
  });
});
