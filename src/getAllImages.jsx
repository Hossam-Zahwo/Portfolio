import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export const getAllImages = async () => {
  const storage = getStorage();
  const listRef = ref(storage, 'images'); // تعديل المسار ليطابق مسار مجلد الصور في Firebase Storage
  const imageUrls = [];

  const list = await listAll(listRef);
  for (const itemRef of list.items) {
    const url = await getDownloadURL(itemRef);
    imageUrls.push(url);
  }

  return imageUrls;
};
