import React from 'react'
import {IoMdThumbsUp,  IoMdThumbsDown} from 'react-icons/io'
import '../bootstrap.min.css'
import './Comments.css'
const Comments = (props) => {
    return (
        <div style={{width:'80%',margin:'0 auto',marginTop:'50px'}}>
            {
                props.Comments.map((comment,i)=>{
                    return (
                        <div style={{margin:'5px auto',borderBottom:'2px solid #EAF0F1',width:'80%'}} key={comment.id}>
                            <h6>{i+1}.{comment.id.slice(1,6)}</h6>
                            <div>
                                {comment.comment}
                                <p style={{marginTop:'5px'}}>
                                      
                                       <span style={{margin:'3px 0',marginRight:'10px'}} >
                                           <IoMdThumbsUp color="green" size='2rem' className="grow"
                                           onClick={()=>props.updateUpVote(comment.id,comment.upVotes)}/>
                                           Upvotes:{comment.upVotes}
                                        </span> 
                                        <span style={{margin:'3px 0',marginLeft:'10px'}} >
                                            <IoMdThumbsDown color='red' size='2rem' className="grow"
                                            onClick={()=>props.updateDownVote(comment.id,comment.downVotes)}/>
                                            Downvotes:{comment.downVotes}
                                        </span>
                                        
                                         
                                         
                                </p>
                            </div>
                             
                         </div>
                   
                    );
                })
            }
        </div>
    )
}

export default Comments;
