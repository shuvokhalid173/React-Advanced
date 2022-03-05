export default function StatusReact(props) {
    let likeHandler = () => {
        console.log("like clicked!!!");
    };

    return (
        <div className="status-react">
            <h4 onClick={likeHandler}>Like</h4>
            <h4>Share</h4>
            <h4>Comment</h4>
        </div>
    );
}
