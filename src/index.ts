interface WindowEventMap {
    keydown: KeyboardEvent;
    keypress: KeyboardEvent;
    keyup: KeyboardEvent;
}

export const useKeyboardEvent = <K extends keyof WindowEventMap>(
    keyboardEvent: (e: WindowEventMap[K]) => void,
    type: K
) => {
    document.body.addEventListener(type, (e: WindowEventMap[K]) => {
        keyboardEvent(e);
    });
};
