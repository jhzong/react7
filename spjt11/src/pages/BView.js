import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const BView = () => {

    const {id}=useParams();
    const navigate = useNavigate();//페이지 이동
    const[board,setBoard]=useState({})
    console.log('넘어온 아이디:',id);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log("BView:",res.data)
            setBoard(res.data)//useState변수에 입력
        })
    },[id])

    const delBtn=()=>{
        if(window.confirm(`${id} 게시글을 삭제합니까?`)){
            console.log('')
        }
    }
    return(
        <div className="root">
          <h2>BView 상세보기</h2>
            <div className="card">
            <img src="/images/aespa01.webp" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">제목:{board.title}</h5>
                    <p className="card-text">{board.body}</p>
                </div>
            </div>
            <button type="button" className="btn btn-primary">수정</button>
            <button type="button" onClick={()=>delBtn(board.id)} className="btn btn-secondary">삭제</button>
            <button type="button" onClick={()=>navigate('/board/bList')} className="btn btn-success">목록</button>
        </div>
    )
}

export default BView;