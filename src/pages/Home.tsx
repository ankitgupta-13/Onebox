import { getAllMails, resetOnebox } from "../api/email.api";

const Home = () => {
  const handleAllMails = async () => {
    await resetOnebox();
    const response = await getAllMails();
    console.log(response);
  };

  return <div></div>;
};

export default Home;
