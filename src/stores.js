import { writable } from "svelte/store";

export const FeedbackStore = writable(
    [
        {
          id: 1,
          rating: 10,
          text: 'bla bla vla',
        },
        {
          id: 2,
          rating: 9,
          text: 'bla vla vla',
        },
        {
          id: 3,
          rating: 8,
          text: 'vla vla vla',
        },
    ]
);