const isLocalStorageAvailable = () => typeof localStorage !== "undefined";

export const loadFromLocalStorage = (tagFilterStore: {
  set: (value: string) => void;
}) => {
  if (isLocalStorageAvailable()) {
    const storedTagFilter = localStorage.getItem("tagFilter");
    tagFilterStore.set(storedTagFilter ? storedTagFilter : "All categories");
  }
};

export const saveToLocalStorage = (tagFilter: string | null) => {
  if (isLocalStorageAvailable() && tagFilter) {
    localStorage.setItem("tagFilter", tagFilter);
  }
};
