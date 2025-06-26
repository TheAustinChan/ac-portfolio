const Home = () => {
  return (<>
  <h1>Home Page</h1>
  <h2>Behold! My resume</h2>
    <object data="Resume.pdf" type="application/pdf" width="100%" height="500px">
      <p>Unable to display pdf <a href="Resume.pdf">Download Instead</a></p>
    </object>
  </>);
};
//note: github pages is static, thus can only work if resume is in same exact directory as the one calling it
export default Home;