import create from "zustand";

type Store = {
    playing: boolean,
    setPlaying: () => void,
    bpm: number,
    setBpm: (newBpm : number) => void
}

const useStore = create<Store>((set, get) => ({
    playing: false,
    setPlaying: () => set((state) => ({playing: !state.playing})),
    bpm: 60,
    setBpm: (newBpm) => set(({bpm: newBpm}))
}))

export default useStore