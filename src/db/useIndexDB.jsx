import { openDB } from "idb";

export async function initializeDB() {
  return await openDB("notes-db", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("notes")) {
        db.createObjectStore("notes-store", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
}

export async function getAllNotesDB() {
  const db = await initializeDB();
  const tx = db.transaction("notes-store", "readonly");
  const store = tx.objectStore("notes-store");
  return store.getAll();
}

export async function saveNoteDB(note) {
  const db = await initializeDB();
  const tx = db.transaction("notes-store", "readwrite");
  const store = tx.objectStore("notes-store");
  await store.add(note);
  await tx.complete;
}

export async function deleteNoteDB(id) {
  const db = await initializeDB();
  const tx = db.transaction("notes-store", "readwrite");
  const store = tx.objectStore("notes-store");
  await store.delete(id);
  await tx.complete;
}

export async function updateNoteDB(updatedNoteDB) {
  const db = await initializeDB();
  const tx = db.transaction("notes-store", "readwrite");
  const store = tx.objectStore("notes-store");
  await store.put(updatedNoteDB);
  await tx.complete;
}
