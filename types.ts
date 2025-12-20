export interface NavLink {
  label: string;
  href: string;
  isDropdown?: boolean;
}

export interface Category {
  id: string;
  label: string;
  arabicLabel?: string;
}
