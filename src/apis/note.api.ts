import { collection, addDoc, Timestamp, getCountFromServer, query, orderBy, limit as fbLimit, getDocs, } from "firebase/firestore";
import { db } from "../configs/firebase";
import type { INote } from "../interfaces/notes/INote";

export const create = async (note: INote) => {
const now = Timestamp.now().toDate();

const newNote: INote = {
  ...note,
  createdAt: now.toISOString(),
  updatedAt: now.toISOString(),
};

  const docRef = await addDoc(collection(db, "notes"), newNote);
  return docRef.id;
};

export const getMulti = async ({
  limit = 10,
  page = 1,
}: {
  limit?: number;
  page?: number;
}) => {
  const notesRef = collection(db, "notes");

  // 🔢 Lấy tổng số ghi chú
  const snapshotTotal = await getCountFromServer(notesRef);
  const totalItems = snapshotTotal.data().count;

  // 🧾 Lấy ghi chú phân trang
  const q = query(
    notesRef,
    orderBy("createdAt", "desc"),
    fbLimit(limit * page)
  );

  const snapshot = await getDocs(q);
  const allNotes = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as INote[];

  const offset = (page - 1) * limit;
  const paginatedNotes = allNotes.slice(offset, offset + limit);

  return {
    items: paginatedNotes,
    totalItems,
  };
};
