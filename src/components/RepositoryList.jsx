import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

//https://api.github.com/orgs/rocketseat/repos

const repositoryName = "unform1";
const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/LucasGabryell/Modulo-01-React",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []); // sempre com dois parametros

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
