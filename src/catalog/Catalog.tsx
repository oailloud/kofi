import { useEffect, useState, type FC } from "react";
import { catalogService } from "../services/catalog.service";
import type { Coffee } from "../types/coffees";

export const Catalog: FC = () => {

    const [coffees, setCoffees] = useState<Coffee[]>([]);

    useEffect(() => {
        console.log("double effect");
        if (coffees.length) return;
        (async () => {
            const _coffees = await catalogService.listCoffees();
            setCoffees(_coffees);
        })();
    }, []);

    return (
        <ul>
            {coffees.map((coffee) => (
                <li>{coffee.name}</li>
            ))}
        </ul>
    )
}
