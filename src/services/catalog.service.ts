import type { Coffee } from "../types/coffees";

const listCoffees = async (): Promise<Coffee[]> => {
    const response = await fetch("http://localhost:3000/coffees")
    if (!response.ok) throw new Error("Coffee listing failed");
    const coffees = await response.json();
    return coffees;
};

export const catalogService = {
    listCoffees,
}
