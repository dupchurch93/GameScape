import fetch from "../../store/csrf";
import { useEffect, useState } from "react";

const AllDecksComponent = () => {
  const [allDecks, setAllDecks] = useState(null);

  const getAllDecks = async () => {
    const res = await fetch("/api/decks/all");
    setAllDecks(res.data.decks);
  };

  useEffect(() => {
    getAllDecks();
  }, []);

  return (
    <div>
      {allDecks &&
        allDecks.map((deck) => {
          return <div key={deck.id}>{deck.name}</div>;
        })}
    </div>
  );
};
export default AllDecksComponent;
