import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
  const LoginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    LoginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, registerModal, LoginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await signIn("credentials", {
        email,
        password,
      });

      LoginModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [LoginModal, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading} />
      <Input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );
  const footContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First Time Using Twitter?
        <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
          {" "}
          Create an account
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={LoginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      body={bodyContent}
      onSubmit={onSubmit}
      footer={footContent}
      onClose={LoginModal.onClose}
    />
  );
};

export default LoginModal;
