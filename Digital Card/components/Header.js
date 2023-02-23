import React from "react"

export default function Header(){
    return (
        <div className="header-con">
        <img src="https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000" className="avatar" />
        <h3>Pawan Yadav</h3>
        <p>Frontend Devloper</p>
        <small>Ypawan22@mail.com</small>
        <div>
        <button>Email</button>
        <button>LinkedIn</button>
        </div>
        </div>
    )
}