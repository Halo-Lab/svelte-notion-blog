import { writable } from "svelte/store";

export const tagFilterStore = writable<string>("");
export const isPostsLoading = writable<boolean>(true);
