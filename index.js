const Button = (props) => {
    //  Write your code here.
    const { classNaming, buttonDescription } = props;
    console.log(props);
    return <button className={classNaming}>{buttonDescription}</button>;
  };
  
  const element = (
    //  Write your code here.
    <div className="bg">
      <h1 className="mainHeading">Social Buttons</h1>
      <div className="buttonContainer">
        <Button classNaming="likeBtn btnAll" buttonDescription="Like" />
        <Button classNaming="commentBtn btnAll" buttonDescription="Comment" />
        <Button classNaming="shareBtn btnAll" buttonDescription="Share" />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  