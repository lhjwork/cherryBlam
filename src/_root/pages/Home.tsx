const Home = () => {
  //flex: 1 1 0% : 이템이 가능한 최대한 컨테이너의 공간을 활용하여
  //늘어날 수 있으며, 필요에 따라 축소될 수 있도록 함
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>

          <ul className="flex flex-col flex-1 gap-9 w-full"></ul>
        </div>
      </div>
      <div className="home-creators"></div>
    </div>
  );
};

export default Home;
