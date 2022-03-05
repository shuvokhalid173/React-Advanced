import React, { useState } from "react";

export default function StatusReact(props) {
    let like = "Like";

    let state = useState(like);
    like = state[0];
    let setLikeText = state[1];

    let likeHandler = () => {
        setLikeText("liked");
        console.log(like);
    };

    return (
        <div className="status-react">
            <h4 onClick={likeHandler}>{like}</h4>
            <h4>Share</h4>
            <h4>Comment</h4>
        </div>
    );
}
