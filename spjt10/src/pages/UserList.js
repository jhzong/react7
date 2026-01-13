import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Spinner from "../comp/Spinner";

const UserList = () => {
    
    const [Users,setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    // axios
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log('Json데이터 : ',res)
            setUsers(res.data)
            setLoading(false)
        })
    },[])

    const delBtn = (id)=>{
        if(window.confirm(`${id} 회원을 삭제하시겠습니까?`)){
            console.log(id)
        }

    };
    const user_list = Users.map((user)=>{
        return(
            <div className="card" key={user.id}>
                <h5 className="card-header">아이디 : {user.id}</h5>
                <div className="card-body">
                    <h5 className="card-title">이름 : {user.name}</h5>
                    <p className="card-text">주소 : {user.address.street} {user.address.suite}</p>
                    <button className="btn btn-primary">수정</button>
                    <button onClick={()=>{delBtn(user.name)}} className="btn btn-primary">삭제</button>
                </div>
            </div>

        )
    })

    return(
        <div className="Root">
            <h2>회원리스트</h2>
            {loading?<Spinner/>:user_list}
        </div>
    )
};

export default UserList;