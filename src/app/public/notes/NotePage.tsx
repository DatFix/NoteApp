import { useEffect, useState } from "react";
import { NoteApi } from "../../../apis";
import NoteLayout from "../../../layouts/notes/NoteLayout";
import type { INote } from "../../../interfaces/notes/INote";

export default function NotePage() {
  const [items, setItems] = useState<INote[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchNotes = async () => {
      const { items, totalItems } = await NoteApi.getMulti({});
      setItems(items);
      setTotalItems(totalItems);
    };

    fetchNotes();
  }, []);

  console.log('====================================');
  console.log(items);
  console.log('====================================');

  return <NoteLayout items={items} totalItems={totalItems} />;
}
