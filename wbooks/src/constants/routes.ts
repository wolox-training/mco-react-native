import { ImageSourcePropType } from 'react-native';
import libraryIconActive from '@assets/ic_library_active.png';
import libraryIcon from '@assets/ic_library.png';
import wishlistIconActive from '@assets/ic_wishlist_active.png';
import wishlistIcon from '@assets/ic_wishlist.png';

export const ROUTES = {
  BookDetail: 'BookDetail',
  BookList: 'BookList',
  Library: 'Library',
  Wishlist: 'Wishlist'
};

type TabBarIcons = {
  [key: string]: { active: ImageSourcePropType; inactive: ImageSourcePropType };
};

export const TabNavigatorIcons: TabBarIcons = {
  [ROUTES.Library]: {
    active: libraryIconActive,
    inactive: libraryIcon
  },
  [ROUTES.Wishlist]: {
    active: wishlistIconActive,
    inactive: wishlistIcon
  }
};
