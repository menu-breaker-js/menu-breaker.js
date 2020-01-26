import { Settings, Options } from './types';
declare global {
    interface Window {
        jQuery: any;
    }
}
export default class MenuBreaker {
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
    extendSettings(settings: Settings): Settings;
}
