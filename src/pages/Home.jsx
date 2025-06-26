const Home = () => {
  return (<>
  <h1>Home Page</h1>
  <h2>Behold! My resume</h2>
    <object data="OSUTranscript(Graduated).pdf" type="application/pdf" width="100%" height="500px">
      <p>Unable to display pdf <a href="OSUTranscript(Graduated).pdf">Download Instead</a></p>
    </object>
  <h2>A transcript as well</h2>
    <object data="Resume.pdf" type="application/pdf" width="100%" height="500px">
      <p>Unable to display pdf <a href="Resume.pdf">Download Instead</a></p>
    </object>
  </>);
};

export default Home;