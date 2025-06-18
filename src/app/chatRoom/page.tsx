import ChatInterface from "./components/ChatInterface";

const chatRoomPage = async () => {
  const res = await fetch(
    `http://localhost:3000/chatRoom/api/livekit-token?userId=user123&room=lawyer-room`
  );

  if (!res.ok) {
    console.error("Failed to fetch token:", res.statusText);
    return <div>Error fetching token</div>;
  }

  const data = await res.json();

  if (!data.token) {
    console.error("No token received");
    return <div>No token received</div>;
  }

  return (
    <div>
      <div className="h-screen">
        <ChatInterface token={data.token} />
      </div>
    </div>
  );
};
export default chatRoomPage;
