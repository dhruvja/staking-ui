// import * as React from "react";
// import { FunctionComponent } from "react";

// import cn from "clsx";
// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// import { ErrorMsg } from "generated/graphql";

import dorseLogo from "src/images/dorse_logo.svg";
// import linkedinLogo from "images/linkedin.svg";

import useAuth from "src/components/Auth/useAuth";
// import { PrivacyPolicy } from "components/common/PrivacyPolicy";
// import { VerifiedEmailDialog } from "components/modals/VerifiedEmail";
// import { VerifyEmailDialog } from "components/modals/VerifyEmail";

// import { emailRegex } from "utils";

// export const SignUpPage: React.FunctionComponent<{
//   isEmailVerified?: boolean;
// }> = ({ isEmailVerified = false }) => {
//   const [isVerifiedEmailOpen, setIsVerifiedEmailOpen] =
//     React.useState(isEmailVerified);
//   return (
//     <div className="relative w-full h-full">
//       {isVerifiedEmailOpen && (
//         <VerifiedEmailDialog
//           open={isVerifiedEmailOpen}
//           setOpen={setIsVerifiedEmailOpen}
//         />
//       )}
//       <SignupHeader />
//       <SignupWrapper>
//         <div className="flex flex-col items-center">
//           <div className="w-full">
//             <h2 className="font-sora font-[700] text-[31px] w-full leading-none">
//               Sign up.
//             </h2>
//             <p className="font-sans w-full text-txtGrey mt-3 leading-tight">
//               Login with your data that you entered during your registration.
//             </p>
//           </div>
//           <SignupForm />
//         </div>
//       </SignupWrapper>
//     </div>
//   );
// };

// type SignUpInputs = {
//   email: string;
//   password: string;
// };

// const SignupForm: FunctionComponent = () => {
//   const [isDialogOpen, setIsDialogOpen] = React.useState(false);
//   const { signup, getLinkedinToken, requestEmailVerification } = useAuth();
//   const {
//     getValues,
//     register,
//     formState: { errors, touchedFields },
//   } = useForm<SignUpInputs>({
//     mode: "onBlur",
//   });

//   const verifyEmailRequest = async () => {
//     if (
//       errors.email ||
//       errors.password ||
//       !touchedFields.email ||
//       !touchedFields.password
//     )
//       return;
//     const { email, password } = getValues();
//     const res = await signup(email, password, password);
//     if (res.data?.signup) {
//       setIsDialogOpen(true);
//     } else if (
//       (res.errors as unknown as any)?.message ===
//       ErrorMsg.EmailAlreadyExistButNotVerified
//     ) {
//       setIsDialogOpen(true);
//     }
//   };

//   const resendVerificationEmail = async () => {
//     requestEmailVerification(getValues().email);
//   };

//   return (
//     <>
//       <VerifyEmailDialog
//         open={isDialogOpen}
//         setOpen={setIsDialogOpen}
//         resendVerificationEmail={resendVerificationEmail}
//         email={getValues().email}
//       />
//       <div className={cn("mt-16 w-full flex flex-col items-center")}>
//         <section className="w-full relative pb-[37px] font-sans">
//           <label className={cn("text-sm", { "text-errorRed": errors.email })}>
//             Email Address
//           </label>
//           <div
//             className={cn(
//               "relative border-primary border-b h-[32px] mt-[1px] pr-10",
//               { "border-errorRed": errors.email }
//             )}
//           >
//             <input
//               placeholder="Email"
//               className="bg-transparent placeholder-opacity-50 placeholder-[#C4C4C4] text-[#C4C4C4] w-full h-4 mb-[9px]"
//               {...register("email", {
//                 required: true,
//                 pattern: emailRegex,
//               })}
//             />
//             <img
//               className={cn(
//                 "absolute right-[16px] top-[50%] translate-y-[-50%]",
//                 !errors.email && touchedFields.email ? "" : "hidden"
//               )}
//               src="/icons/form-tick.svg"
//             />
//           </div>
//           <p
//             className={cn(
//               "absolute left-0.5 bottom-[15px] font-light leading-none text-[13px] text-errorRed",
//               { hidden: !errors.email }
//             )}
//           >
//             The email address is incomplete
//           </p>
//         </section>
//         <SignupPw register={register} />
//         <section className="mt-[60px] w-full flex flex-col gap-6 items-center justify-center">
//           <button
//             onClick={verifyEmailRequest}
//             className="w-[327px] h-[54px] flex items-center justify-center rounded-3xl bg-primary hover:opacity-80 transition-opacity duration-200"
//           >
//             <p className="font-mono font-[500] text-white">SIGN UP</p>
//           </button>
//           <p className="font-sans text-sm">Or continue with</p>
//           <button
//             className="bg-white w-[311px] h-[54px] rounded-sm shadow-lg flex items-center justify-center gap-[15px]"
//             onClick={getLinkedinToken}
//           >
//             <img src={linkedinLogo} alt="" />
//             <p className="text-base text-black opacity-[54%] font-sans font-[500]">
//               Continue with LinkedIn
//             </p>
//           </button>
//         </section>
//         <div className="mt-8 md:mt-[59px]">
//           <PrivacyPolicy />
//         </div>
//       </div>
//     </>
//   );
// };

// const SignupPw: FunctionComponent<{ register: any }> = ({ register }) => {
//   const [pwView, setPwView] = React.useState(false);
//   return (
//     <section className="w-full font-sans">
//       <label className="text-sm">Password</label>
//       <div className="relative border-primary border-b h-[32px] mt-[1px]">
//         <input
//           type={pwView ? "text" : "password"}
//           placeholder="Password"
//           className="bg-transparent placeholder-opacity-50 placeholder-[#C4C4C4] text-[#C4C4C4] w-full h-4 mb-[9px]"
//           {...register("password", { required: true })}
//         />
//         <button onClick={() => setPwView((v) => !v)}>
//           <img
//             className={cn("absolute right-[16px] top-[50%] translate-y-[-50%]")}
//             src={!pwView ? "/icons/eye-crossed.svg" : "/icons/eye.svg"}
//           />
//         </button>
//       </div>
//     </section>
//   );
// };

// const SignupWrapper: FunctionComponent = ({ children }) => {
//   return (
//     <div className="w-full h-full mx-auto md:w-[476px] lg:w-[1024px]">
//       <div className="h-full w-full grid grid-rows-[1fr,fit-content(100%),1fr]">
//         <div />
//         <div className="grid grid-cols-[1fr,minmax(200px,472px),1fr]">
//           <div />
//           {children}
//           <div />
//         </div>
//         <div />
//       </div>
//     </div>
//   );
// };

export const SignupHeader = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  return (
    <header className="pl-[137px] pt-[70px] w-[100vw] flex items-center absolute top-0 left-0 px-8">
      <button
        className="hidden md:block"
        onClick={() => (isLoggedIn ? navigate("/") : navigate("/landing"))}
      >
        <img src={dorseLogo} alt="logo" />
      </button>
    </header>
  );
};
