import { WHITE, CERULEAN, GRAY } from '@constants/colors';
import NavBackground from '@components/NavBackground';

export const stackNavigatorConfig = {
  headerTitleStyle: {
    fontSize: 16,
    color: WHITE,
    fontWeight: '600',
    letterSpacing: -0.4,
    marginBottom: 20
  },
  headerLeftContainerStyle: {
    marginBottom: 30,
    paddingHorizontal: 0
  },
  headerStyle: {
    height: 100
  },
  headerBackTitleVisible: false,
  headerBackground: NavBackground,
  headerTransparent: true,
  headerTintColor: WHITE
};

export const tabNavigatorConfig = {
  labelStyle: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.15
  },
  activeTintColor: CERULEAN,
  inactiveTintColor: GRAY
};
