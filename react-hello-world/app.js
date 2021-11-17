console.log("Hello");

const placeholder = document.getElementById('placeholder');


const Home = React.createElement('a',{href:"https://reactjs.org",target:"_blank",style:{color:"red",textDecoration:"none",fontWeight:"bold",fontSize:"2rem"},className:"link-ref"},"Home");
const about = React.createElement('a',{href:'/about',style:{color:"green",fontWeight:"bold",textDecoration:"none",paddingRight:'5px',fontSize:"2rem"}},"About");
// const br = React.createElement('br',null,null);
const h1Tag = React.createElement("h1",null,"Welcome to React");
const headerStuff = React.createElement('div',
{
    style:{
        display:"flex",
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"space-between",
        flexWrap:"nowrap",
        alignItems:"center",
        backgroundColor: '#a3ffff',
        padding:'5px'
    }
}, h1Tag,Home,about);

//placeholder.innerHTML = app;
const pTag = React.createElement("p",{style:{marginLeft:"10px"}},"This is my first React project.");
const h2Tag = React.createElement("h2",{style:{marginLeft:"10px"}},"Home Page");
const body = React.createElement("div",{className:"main-body"},headerStuff,h2Tag,pTag);
ReactDOM.render(body, placeholder);
// ReactDOM.render(app, placeholder)