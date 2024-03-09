import { revalidatePath } from "next/cache";
import getTheme from "./getTheme";

export default async function setTheme() {
    "use server";
    let currentTheme = await getTheme();
    let newTheme = currentTheme === "dark" ? "ligth" : "dark";
    const response = await fetch("http://localhost:5000/theme/theme", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "theme", value: newTheme }),
    });

    // console.log(response.status); // Log the response status code
    // if (!response.ok) {
    //     console.error('Error:', response.statusText);
    // }
    revalidatePath("/");
}
