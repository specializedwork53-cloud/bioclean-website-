import { create } from "zustand";

interface FilterState {
    activeIngredient: string | null;
    activeCategory: string | null;
    setActiveIngredient: (ingredient: string | null) => void;
    setActiveCategory: (category: string | null) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    activeIngredient: null,
    activeCategory: null,
    setActiveIngredient: (ingredient) => set({ activeIngredient: ingredient, activeCategory: null }),
    setActiveCategory: (category) => set({ activeCategory: category, activeIngredient: null }),
}));
