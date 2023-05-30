export const loadFromLocalStorage = (allPosts, tagFilterStore) => {
  if (typeof localStorage !== "undefined") {
    const storedPosts = localStorage.getItem("posts");
    const storedTagFilter = localStorage.getItem("tagFilter");
    if (storedPosts) {
      allPosts = JSON.parse(storedPosts);
    }
    if (storedTagFilter) {
      tagFilterStore.set(storedTagFilter);
    } else {
      tagFilterStore.set("All categories");
    }
  }
  return allPosts;
};

export const saveToLocalStorage = (allPosts, tagFilter) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("posts", JSON.stringify(allPosts));
    if (tagFilter) {
      localStorage.setItem("tagFilter", tagFilter);
    }
  }
};
