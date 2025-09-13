"use client"
import React from 'react'
import { useRouter } from "next/navigation";
export const SearchFormReset = () => {

    const router = useRouter();
    const reset = () => {

        const form = document.querySelector(".form") as HTMLFormElement;
        form?.reset();

        router.push("/");

    }
    return (
        <button type="button" onClick={reset}>reset</button>
    )
}
