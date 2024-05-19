import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
  persist(
    
    devtools((set) => ({
      vaults: [],
      selectedVaultIndex: null,
      addVaults : (name) => set((state) => ({
          vaults: [
            ...state.vaults,
            {
              name: name,
              files: [],
            },
          ],
        })),
      addFileToVault: (vaultIndex, file) =>
        set((state) => {
          const updatedVaults = state.vaults.map((vault) =>
            vault.name.id === vaultIndex
              ? { ...vault, files: [...vault.files, file] }
              : vault
          );
          console.log(updatedVaults);
          return { vaults: updatedVaults };
        }),
        setSelectedVaultIndex: (index) => set({ selectedVaultIndex: index }),
        
    })),
    {
      name: "password-storage",
    }
  )
);
export default useStore;
