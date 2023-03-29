import { useRouter } from "next/router";
import { Avatar } from "../../components/Avatar";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          avatarUrl="https://www.kino-teatr.ru/acter/photo/0/1/3610/1185386.jpg"
          fullName="Abdullin Bulat"
          userName="bulatoff0"
          about="Test info"
        />
      </div>
    </>
  );
}
