import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/Todocontainer";

function Landingpage() {
  const location = useLocation();
  const userName = location.state.userName;

  return (
    <>
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <Header name={userName}></Header>
          <div className="flex justify-between gap-7 my-7 flex-wrap">
            <Card bgColor="#8272DA" title="Chennai" subtitle="Today"></Card>
            <Card
              bgColor="#FD6663"
              title="November 20"
              subtitle="14:23:08"
            ></Card>
            <Card bgColor="#FCA201" title="Build Using" subtitle="React"></Card>
          </div>
          <div>
            <TodoContainer></TodoContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
