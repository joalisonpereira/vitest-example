import { describe, expect, it, vi } from "vitest";
import { api, ProductService } from "../ProductService";

describe("ProductService", () => {
  it("should fetch products", async () => {
    api.get = vi.fn().mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 10,
    });

    const data = await ProductService.fetch();

    expect(data.products).toEqual([]);

    expect(data.total).toEqual(0);

    expect(data.skip).toEqual(0);

    expect(data.limit).toEqual(10);
  });
});
