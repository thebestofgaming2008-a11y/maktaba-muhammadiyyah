export enum HeroType {
  SEARCH_FIRST = 'Search First',
  SPLIT_FEATURE = 'Split Feature',
  BROWSE_GRID = 'Browse Grid',
  MINIMAL_TYPE = 'Minimal Type',
  GUIDED_PATHWAYS = 'Guided Pathways',
  PRODUCT_LED = 'Product Led',
  SEASONAL = 'Seasonal',
  BILINGUAL = 'Bilingual'
}

export interface HeroProps {
  isActive: boolean;
}