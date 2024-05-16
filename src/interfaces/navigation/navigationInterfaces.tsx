import { RootState } from "redux/rootReducer";

export interface MapNavigationLinksProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  location: string;
  user: RootState["user"]["user"];
  handleLogout: () => void;
}
export interface UseToggleProps {
  isActive: boolean;
  handleToggle: () => void;
}
