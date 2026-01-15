import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const BList = () => {

    const navigate=useNavigate();

    const[boards,setBoards]=useState([
        // {'bno':'1','btitle':'게시글 제목입니다.1','bcontent':'게시글 내용입니다.1'},
        // {'bno':'2','btitle':'게시글 제목입니다.2','bcontent':'게시글 내용입니다.2'},
        // {'bno':'3','btitle':'게시글 제목입니다.3','bcontent':'게시글 내용입니다.3'}
    ])//useState
    const[flag,setFlag]=useState(false)//삭제 후 갱신

    useEffect(
        ()=>{
            //axios->setBoards():파라미터로 전달 params추가
            axios.get('http://localhost:8000/customer/clistJson/',
                {params:{'id':'aaa','page':1}}
            )
            .then(res=>{
                console.log('넘어온 데이터:',res.data.list)
                setBoards(res.data.list)
            })
        },[flag]//flag:갱신
    )

    const deleteBtn = (bno) => {
        if(window.confirm(`${bno}번 게시글을 삭제합니까?`)){
            axios.delete(`http://localhost:8000/customer/cdeleteJson/${bno}/`,{data:{'name':'홍길동'}})
            .then(res=>{
                alert(`${bno}번 게시글을 삭제합니다.`)
                navigate('/BList')
                setFlag(!flag)//삭제 후 갱신
            })
        }
    }

    const board_list=boards.map((board)=>{
        return(
            <div className="card">
                <div className="card-header">
                    번호 : {board.bno}
                </div>
                <div className="card-body">
                    <h5 className="card-title">제목 : {board.btitle}</h5>
                    <p className="card-text">{board.bcontent}</p>
                    <button className="btn btn-primary">수정</button>
                    <button onClick={()=>deleteBtn(board.bno)} className="btn btn-primary">삭제</button>
                </div>
            </div>
        )
    })//board_list

    const writeBtn = () =>{
        navigate('/Bwrite')
    }
    return(
        <div className="root">
        <h2>게시판리스트</h2>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={writeBtn} className="btn btn-primary me-md-2" type="button">글쓰기</button>
            </div>
            {board_list}
            
        </div>
    )
}
export default BList;