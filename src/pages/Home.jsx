const Home = () => {
  return (<>
  <h1>Home Page</h1>
  <h2>Behold! My resume</h2>
    <object data="/OSU%20Transcript%20(Graduated).pdf" type="application/pdf" width="100%" height="500px">
      <p>Unable to display pdf <a href="/OSU%20Transcript%20(Graduated).pdf">Download Instead</a></p>
    </object>
  <h2>A transcript as well</h2>
    <object data="/SWE%20Resume.pdf" type="application/pdf" width="100%" height="500px">
      <p>Unable to display pdf <a href="/SWE%20Resume.pdf">Download Instead</a></p>
    </object>
  </>);
};

export default Home;