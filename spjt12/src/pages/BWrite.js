import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BWrite = () => {

    const [btitle,setBtitle]=useState('');
    const [bcontent,setBcontent]=useState('');
    const [id,setId]=useState('aaa');// 로그인을 적용해 session,token에 있는 id를 가져옴 
    const navigate=useNavigate();
    //글수정
    useEffect(
        ()=>{
            console.log();
        },[]
    )//useEffect

    const saveBtn=()=>{
        //axios->게시글저장:post방식
            axios.post('http://localhost:8000/customer/cwriteJson/',{'id':id,'btitle':btitle,'bcontent':bcontent})
            .then(res=>{
                alert('게시글을 저장합니다.')
                navigate('/Blist')
            })
    }

    return(
        <div className="root">
          <h2>게시글등록</h2>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">게시글 제목</label>
                <input type="text" value={btitle} onChange={(e)=>setBtitle(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하시오."/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">게시글 내용</label>
                <textarea value={bcontent} onChange={(e)=>setBcontent(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={saveBtn} class="btn btn-primary me-md-2" type="button">저장</button>
                <button class="btn btn-primary" type="button">취소</button>
            </div>
        </div>
    )
}
export default BWrite;