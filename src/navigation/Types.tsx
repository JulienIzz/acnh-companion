export type RootStackParamList = {
  Home: undefined;
  Encyclopedie: undefined;
  Search: undefined;
  Test: undefined;
};

export type Routes = keyof RootStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
