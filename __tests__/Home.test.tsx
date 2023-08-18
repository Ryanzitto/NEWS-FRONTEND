import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

it("Should have templates", () => {
  render(<Home />);
});
