import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("Disaplys information about the repository", () => {
  const repo = {
    language: "Javascript",
    stargazers_count: 10,
    open_issues: 20,
    forks: 50,
  };

  render(<RepositoriesSummary repository={repo} />);

  for (let key in repo) {
    const value = repo[key];
    const element = screen.getByText(new RegExp(value));

    expect(element).toBeInTheDocument();
  }
});
