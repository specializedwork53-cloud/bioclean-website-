import { create } from 'zustand';

interface FilterState {
    activeIngredient: string | null;
    setActiveIngredient: (ingredient: string | null) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    activeIngredient: null,
    setActiveIngredient: (ingredient) => set({ activeIngredient: ingredient }),
}));
