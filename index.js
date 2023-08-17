const Button = (props) => {
    //  Write your code here.
    const { mainHeading, likeButton, commentButton, shareButton } = props;
    return (
      <div className="bg">
        <h1 className="mainHeading">{mainHeading}</h1>
        <div className="buttonContainer">
          <button className="likeBtn btnAll">{likeButton}</button>
          <button className="commentBtn btnAll">{commentButton}</button>
          <button className="shareBtn btnAll">{shareButton}</button>
        </div>
      </div>
    );
  };
  
  const element = (
    //  Write your code here.
    <Button
      mainHeading="Social Buttons"
      likeButton="Like"
      commentButton="Comment"
      shareButton="Share"
    />
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  