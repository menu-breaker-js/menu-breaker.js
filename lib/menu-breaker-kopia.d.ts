interface Callbacks {
    onInit?: () => void;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
    isMobile?: () => void;
    isDesktop?: () => void;
}
interface Settings {
    'navbar-height'?: number;
    'open-class'?: string;
}
interface Options {
    element: HTMLElement;
    callbacks: Callbacks;
    settings: Settings;
}
declare global {
    interface Window {
        jQuery: any;
    }
}
export declare class BoxMenu {
    private element;
    private callbacks;
    private settings;
    private mobileMenu;
    private openButton;
    private closeButton;
    private toggleButton;
    private isOpen;
    constructor(data?: Options);
    addEventListeners(): void;
    onWindowResize: () => void;
    subLevels(): void;
    open(): void;
    close(): void;
    menuButton(init: boolean): void;
    desktop(): void;
    changeMenu(): void;
    extendSettings(settings: Settings): {};
}
export declare class PriorityMenu {
}
export declare class ScrollMenu {
}
export {};
