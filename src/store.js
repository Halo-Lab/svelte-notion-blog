import { writable } from "svelte/store";

export const tagFilterStore = writable("");
export const isPostsLoading = writable(true);
