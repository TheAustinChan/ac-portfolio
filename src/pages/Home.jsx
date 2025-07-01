//{`${process.env.PUBLIC_URL}/Resume.pdf`} is a special env var in a create react app CRA, BUT NOT WORKING WITH VITE"/ac-portfolio/Resume.pdf"
//for VITE, use {`${import.meta.env.BASE_URL}Resume.pdf`} / Resume.pdf instead which resolves to /ac-portfolio, but watchout it may, careful with slashes
const Home = () => {
  return (<>
  <h1>Home Page</h1>
  <hr/>
  <p>Here, I update my current interests and more info about myself.</p>
  <h2>Behold! My resume</h2>
    <object data={`${import.meta.env.BASE_URL}/Resume.pdf`} type="application/pdf" width="100%" height="500px">
      <p>Unable to display pdf</p>
    </object>
  <p>To download instead, <a href={`${import.meta.env.BASE_URL}/Resume.pdf`}>click this</a></p>
  <hr/>
  <p>Current goals for the summer are to maximize my freetime to learn more about CompVis captioning, 
    and webdev to display new things I've been learning through tools like hosting,
    frameworks like React, extensions, and exploring DB usecases from the development side.
  </p>
  </>);
};
//note: github pages is static, thus can only work if resume is in same exact directory as the one calling it
export default Home;