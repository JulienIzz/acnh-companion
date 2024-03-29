export type RootStackParamList = {
  Home: undefined;
  Encyclopedie: undefined;
  Search: undefined;
  BugReporting: undefined;
  Villagers: undefined;
};

export type Routes = keyof RootStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
