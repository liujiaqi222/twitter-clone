import { useRouter } from "next/router";
import { IconType } from "react-icons/lib/esm/iconBase";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, href, icon: Icon, onClick, auth }) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  return (
    <div
      className="flex items-center"
      onClick={() => {
        if (onClick) {
          onClick();
          return;
        }
        if (auth && !currentUser) {
          loginModal.onOpen();
          return;
        }
        router.push(href || "/");
      }}
    >
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300/10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300/10 cursor-pointer ">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
