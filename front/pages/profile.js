import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowerList from '../components/FollowerList';
import FollowingList from '../components/FollowingList';

const Profile = () => {
  const followingList = [
    { nickname: '2NOW' },
    { nickname: '사과' },
    { nickname: '딸기' },
  ];
  const followerList = [
    { nickname: '떡볶이' },
    { nickname: '피자' },
    { nickname: '감자' },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowingList header="팔로잉 목록" data={followingList} />
        <FollowerList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
