import { create } from 'zustand'

export const useIsMiniappStore = create((set) => ({
	isMiniapp: false,
	setIsMiniapp: (value) => set({ isMiniapp: value }),
}))
