import { configureStore } from "@reduxjs/toolkit";
import settingsTrigger from "./settingsTrigger";

export default configureStore({
  reducer: {
    settings: settingsTrigger,
  },
});
