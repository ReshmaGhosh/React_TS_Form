import React from "react";

type FormProps = {
  onSubmit: (searchTerm: string) => void;
};

export default function Form({ onSubmit }: FormProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search products"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
