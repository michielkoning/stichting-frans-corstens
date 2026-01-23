"use client";

import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./FormContact.module.css";
import { CenterWrapper } from "./../CenterWrapper/CenterWrapper";
import { ThemeProvider } from "./../ThemeProvider/ThemeProvider";

const formSchema = z.object({
  name: z.string().min(1, { message: "Dit is een verplicht veld" }),
  email: z.email({ message: "Het e-mailadres is niet correct" }),
  message: z.string(),
});

export const FormContact: FunctionComponent = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = handleSubmit(async (data) => {
    await fetch("/__forms.html", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        ...data,
        "form-name": "contact",
      }).toString(),
    });
    setHasSubmitted(true);
  });

  if (hasSubmitted) {
    return <p>Het formulier is verzonden</p>;
  }
  return (
    <ThemeProvider>
      <div className={styles.wrapper}>
        <CenterWrapper size="md">
          <form onSubmit={onSubmit} method="POST" data-netlify="true">
            <fieldset>
              <legend>Contactformulier</legend>

              <div className={styles["form-item"]}>
                <label htmlFor="name">Naam</label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  {...register("name")}
                />
                <span role="alert">{errors.name?.message}</span>
              </div>
              <div className={styles["form-item"]}>
                <label htmlFor="email">E-mailadres</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...register("email")}
                />
                <span role="alert">{errors.email?.message}</span>
              </div>
              <div className={styles["form-item"]}>
                <label htmlFor="message">Bericht</label>
                <textarea id="message" rows={6} {...register("message")} />
              </div>
            </fieldset>
            <button type="submit">Verzenden</button>
          </form>
        </CenterWrapper>
      </div>
    </ThemeProvider>
  );
};
