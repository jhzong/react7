import React from "react";

const Movies = ({movie}) => {
    return (
        <>
        <div className="card">
        <div className="card-header">번호 : {movie.no}</div>
        <div className="card-body">
          <h5 className="card-title">제목 : {movie.title}</h5>
          <p className="card-text">년도 : {movie.year}</p>
          <a href="#" className="btn btn-primary">수정</a>
          <a href="#" className="btn btn-primary">삭제</a>
        </div>
      </div>
        </>
    );
};

export default Movies;