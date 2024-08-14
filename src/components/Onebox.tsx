import { useQuery } from "@tanstack/react-query";
import { getAllMails } from "../api/email.api";
import noMessage from "../assets/noMessage.svg";
import { Mail } from "../types/mail.type";

const Onebox = () => {
  const { data: allMails, isLoading } = useQuery({
    queryKey: ["allCategories"],
    queryFn: getAllMails,
    staleTime: Infinity,
  });
  console.log(allMails, isLoading);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>All Inbox</p>
          {!allMails.data ? (
            allMails.data.map((mail: Mail) => (
              <div key={mail.id}>
                <div>{mail.id}</div>
              </div>
            ))
          ) : (
            <div>
              <img src={noMessage} alt="not found" />
              <div>
                <p>It’s the beginning of a legendary sales pipeline </p>
                <p>When you have inbound E-mails you’ll see them here</p>
              </div>
            </div>
          )}
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Onebox;
