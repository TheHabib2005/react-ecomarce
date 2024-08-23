import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface stateTypes {
  users: {
    id: string;
    username: string;
    email: string;
    profilePicture: string;
    wishlist: string[];
  }[];
  addUser: (data: {
    id: string;
    username: string;
    email: string;
    profilePicture: string;
    wishlist: string[];
  }) => void;
  addToWishList: (productId: string, userId: string) => void;
}

export const useDataBase = create<stateTypes>()(
  devtools(
    persist(
      (set, get) => ({
        users: [],
        addUser: (data) => {
          const findIndex = [...get().users].findIndex(
            (user) => user.id === data.id
          );
          if (findIndex > -1) {
            return;
          }
          set({ users: [...get().users, data] });
        },
        addToWishList: (productId, userId) => {
          const dusers = [...get().users];

          const userIndex = [...get().users].findIndex(
            (user) => user.id === userId
          );

          if (userIndex > -1) {
            if (dusers[userIndex].wishlist.includes(productId)) {
              dusers[userIndex].wishlist = dusers[userIndex].wishlist.filter(
                (id) => id !== productId
              );
            } else {
              dusers[userIndex].wishlist.push(productId);
            }

            set({ users: dusers });
          }
        },
      }),
      {
        name: "local-db",
      }
    )
  )
);
