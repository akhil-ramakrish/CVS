import React,{useState,useEffect} from 'react'
import './bootstrap.min.css';
import Comments from './components/Comments'
 const App = () => {
   const [newComment,setComment]=useState('');
   const [comments,setComments]=useState([]);
   const [voteUpdated,setVoteUpdated]=useState(false);
   useEffect(()=>{
     if(voteUpdated===true){setVoteUpdated(false)}
      fetch('https://react-cvs.firebaseio.com/Comments.json')
           .then(response=>response.json())
           .then(responseData=>{
             const loadComments = [];
             for(const key in responseData){
               loadComments.push({
                 id:key,
                 comment:responseData[key].comment,
                 upVotes:responseData[key].upVotes,
                 downVotes:responseData[key].downVotes
               })
             }
             setComments(loadComments);
           })
   },[voteUpdated])
      const submitHandler=(e)=>{
        e.preventDefault();
       const data = {
        comment:newComment,
        upVotes:0,
        downVotes:0
       }
       fetch('https://react-cvs.firebaseio.com/Comments.json',{method:'POST',body:JSON.stringify(data),headers:{'ContentType':'application/json'}})
       .then(response=>{
        return response.json()
       
       }).then(responseData=>{
        
        setComments([...comments,{
          id:responseData.name,
          comment:newComment,
          upVotes:0,
          downVotes:0
        }])
       })
       .catch(error=>console.log(error));
      }
      const updateUpVote=(id,count)=>{  
      
         
          fetch(`https://react-cvs.firebaseio.com/Comments/${id}/.json`,{
            method:'PATCH',
            body:JSON.stringify({'upVotes':count+1}),
            headers:{'ContentType':'application/json'}
          }).then(response=>{
            console.log(response.statusText);
            setVoteUpdated(true);
          })
        
      }
      const updateDownVote=(id,count)=>{
               
          fetch(`https://react-cvs.firebaseio.com/Comments/${id}/.json`,{
            method:'PATCH',
            body:JSON.stringify({'downVotes':count+1}),
            headers:{'ContentType':'application/json'}
          }).then(response=>{
            console.log(response.statusText);
            setVoteUpdated(true);
          })
      }
  return (
    <div>
      <form style={{width:'80%',margin:'10px auto'}} onSubmit={(e)=>submitHandler(e)}>
        <div className="form-group m-auto" style={{width:'80%'}}>
          <textarea className="form-control m-auto" value={newComment} onChange={(e)=>setComment(e.target.value)}
          id="exampleFormControlTextarea1" rows="3" 
          placeholder='Type a Comment...'></textarea>
         <button type="submit" className="btn btn-danger float-right mt-2">Post Comment</button>
        </div>
      </form>
      <div>
        <Comments  Comments={comments} updateUpVote={updateUpVote} updateDownVote={updateDownVote}/>
      </div>
    </div>
  )
}

export default App;
