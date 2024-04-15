import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    return <div>
        <center>
        <div style={{
            PaddingTop: 150,
            marginBottom: 10,
           
        }}>
        <input id="title" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input><br></br>
        <input id="desc" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input><br></br>

        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body:JSON.stringify({
                    title: title,
                    description: description,

                }),
                headers: {
                    "Content-type" : "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo added")
                })
            
        }}>Add Todo</button>
        </div>
        </center>
    </div>
    
}