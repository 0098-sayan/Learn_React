import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@constants";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        const maxExisting = Math.max(
          state.nextZIndex,
          ...Object.values(state.windows).map((w) => Number(w?.zIndex ?? 0))
        );
        state.nextZIndex = maxExisting;

        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        win.data = data ?? win.data;
      }),

    closeWindow: (windowKey, { clearData = true } = {}) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        if (clearData) win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),

    getOpenWindows: () =>
      Object.values(useWindowStore.getState().windows).filter((w) => w.isOpen),
  }))
);

export default useWindowStore;
