import { create } from "zustand";

interface RegisterLoginState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

 const useRegisterLogin = create<RegisterLoginState>((set) => {
  return {
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  };
});

export default useRegisterLogin;
