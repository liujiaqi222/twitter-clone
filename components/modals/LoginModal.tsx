import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
  const LoginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // Todo: Login

      LoginModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [LoginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading} />
      <Input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
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
      onClose={LoginModal.onClose}
    />
  );
};

export default LoginModal;