import { describe, it, expect, vi, beforeEach } from "vitest";
import { catalogService } from "./catalog.service";

describe("catalogService.listCoffees", () => {
  const url = "http://localhost:3000/coffees";
  const coffees = [
    { id: 1, name: "Espresso", origin: "Italy" },
    { id: 2, name: "Latte", origin: "France" },
  ];

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("calls fetch with the correct URL and returns parsed coffees", async () => {
    const jsonMock = vi.fn().mockResolvedValue(coffees);
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: jsonMock });
    globalThis.fetch = fetchMock as unknown as typeof fetch;

    const result = await catalogService.listCoffees();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(url);
    expect(jsonMock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(coffees);
  });

  it("throws when the response is not ok", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: false });
    globalThis.fetch = fetchMock as unknown as typeof fetch;

    await expect(catalogService.listCoffees()).rejects.toThrow(
      "Coffee listing failed",
    );
  });
});