import { useContext } from "react";

import { AuthContext } from "./index";

const useAuth = () => useContext(AuthContext);

export default useAuth;
