import { FormEventHandler, useState } from "react";

type FormValues = {
  student_reg_number: string;
  password: string;
}

export default function Signin() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const studentRegNumber = form.elements.namedItem(
      "studentRegNumber"
    ) as HTMLInputElement;
    const password = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    if (studentRegNumber.value.length !== 12 && typeof studentRegNumber.value !== "string") {
      return;
    }

    if (password.value.length <= 0 && typeof password.value !== "string") {
      return;
    }

    const data = {
      student_reg_number: studentRegNumber.value,
      password: password.value,
    };

    loginApiRequest(data);
  };

  async function loginApiRequest(data: FormValues) {
    try {
      const response = await fetch("/api/sign/in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Login successful, redirect to home page
        window.location.href = "/";
      } else {
        // Login failed, show error message
        try {
          const errorData = await response.json();
          setErrorMessage(errorData.message);
        } catch (error) {
          console.error("Error parsing JSON response:", error);
          setErrorMessage("Ocorreu um erro ao analisar a resposta da API");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("O login falhou");
    }
  }

  return (
    <div className={"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"}>
      <div className={"sm:mx-auto sm:w-full sm:max-w-sm"}>
        <h2 className={"mt-10 text-center text-2xl font-bold leading-9 tracking-tight"}>Faça login em sua conta</h2>
      </div>
      <div className={"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"}>
        <form className={"space-y-6"} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="studentRegNumber" className={"block text-sm font-medium leading-6"}>Matrícula</label>
            <div className={"mt-2"}>
              <input id="studentRegNumber" name="studentRegNumber" autoComplete="username" placeholder="202100000000" pattern="[0-9]{12,12}" title="Digite a sua matrícula escolar" required className={"block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"} />
            </div>
          </div>
          <div>
            <div className={"flex items-center justify-between"}>
              <label htmlFor="password" className={"block text-sm font-medium leading-6"}>Senha</label>
              <div className="text-sm">
                <a href="#" className={"font-semibold text-blue-500 hover:text-blue-400"}>Esqueceu a senha?</a>
              </div>
            </div>
            <div className={"mt-2"}>
              <input id="password" name="password" type="password" autoComplete="current-password" placeholder="****************" required className={"block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"} />
            </div>
          </div>
          <div>
            <button type="submit" className={"flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-blue-100 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"}>Sign in</button>
          </div>
        </form>
        { errorMessage != '' ? <p>{errorMessage}</p> : ''}
        <p className={"mt-10 text-center text-sm text-gray-500"}>
          Não tem conta?
          <a href="#" className={"font-semibold leading-6 text-blue-500 hover:text-blue-400"}> Cadastre uma aqui!</a>
        </p>
      </div>
    </div>
  )
}