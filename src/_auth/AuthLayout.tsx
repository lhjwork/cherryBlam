import { Outlet, Navigate } from "react-router-dom";
import { IoMdFlower } from "react-icons/io";
const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    // <></>는 Fragment로, 추가적인 DOM 요소를 만들지 않고 자식 요소들을 그룹화합니다.
    // 따라서 불필요한 HTML 요소가 생성되지 않아 렌더 트리에 불필요한 노드가 추가되는 것을 방지할 수 있습니다.
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            //min-width 최소  min-width 이상에서 작동
            //모바일 디바이스에서 주로 hidden
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
