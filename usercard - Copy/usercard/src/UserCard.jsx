const userData=[{
    name:"Swetha",
    work:"full stack developer",
    profile:"./images/female.png",
},
{
    name:"Alina",
    work:"Senior UX/UI Designer",
     profile:"./images/female.png"
},
{
  name:"Priya",
  work:"Data Analyst",
   profile:"./images/female.png"
}
    
];
     



function User(props){
      return(
        <div className="container">
            <img src={props.profile}  alt="user" />
            <h3>{props.name}</h3>
            <p>{props.work}</p>
            <div className="data">
                <h3>321<br /><span>Posts</span></h3>
                <h3>123K<br /><span>Followers</span></h3>
                <h3>245<br /><span>Following</span></h3>
            </div>
            <div className="buttons">
                <button className="primary">follow</button>
                <button className="primaryoutline">Message</button>
            </div>

        </div>
      
      );


    }
const UserCard = () => {
  return (
    <div>
      {userData.map((user,index)=>(
        <User key={index} name={user.name} work={user.work} profile={user.profile} />))}
    </div>
    // <User name="Alina" work="full stack developer" />
  );
};

export default UserCard

