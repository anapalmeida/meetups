import { useHistory } from "react-router";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpsPage() {
  const history = useHistory();
  function addAddMeetUpHandler(meetUpData) {
    fetch(
      "https://react-getting-started-422d5-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetUpData),
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>New Meet Ups Page</h1>
      <NewMeetUpForm onAddMeetUp={addAddMeetUpHandler} />
    </section>
  );
}

export default NewMeetUpsPage;
