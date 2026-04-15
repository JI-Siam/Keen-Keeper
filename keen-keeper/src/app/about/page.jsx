

const AboutPage =  async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const posts =await res.json() ;
    return (
        <div>
           <h1>{posts.length}</h1>
        </div>
    );
};

export default AboutPage;