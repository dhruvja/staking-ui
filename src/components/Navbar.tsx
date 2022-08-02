import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Img from "react-cool-img";
import { DEFAULT_USER_PHOTO_URL } from "src/app-constants";
import { useGetNavBarTitle } from "src/hooks/navbar";
import useAuth from "./Auth/useAuth";

const Navbar = () => {
  const title = useGetNavBarTitle();
  const { userProfile } = useAuth();
  return (
    <div className="border-b border-b-gray-700 p-5 flex items-center justify-between">
      <div className="text-3xl">{title}</div>
      <div className="flex gap-4 items-center">
        {userProfile && (
          <>
            <div className="">
              <Img
                placeholder={DEFAULT_USER_PHOTO_URL}
                src={userProfile?.photoUrl || DEFAULT_USER_PHOTO_URL}
                error={DEFAULT_USER_PHOTO_URL}
                alt={userProfile?.name}
                className="rounded-full object-cover w-[40px] h-[40px]"
              />
            </div>
            <div className="text-sm font-normal font-sora">
              {userProfile?.name}
            </div>
          </>
        )}
        <WalletMultiButton />
      </div>
    </div>
  );
};

export default Navbar;
