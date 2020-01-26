export interface Callbacks {
  readonly onInit?: () => void;
  readonly onMenuOpen?: () => void;
  readonly onMenuClose?: () => void;
  readonly isMobile?: () => void;
  readonly isDesktop?: () => void;
}
