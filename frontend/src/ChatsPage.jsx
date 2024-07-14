import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
     
    return (
        <div style={{ height: '100vh' }}>
              <PrettyChatWindow
        projectId={'d3ea8683-4a27-4dde-8740-4905bf99a359'}
        username={props.user.username} 
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
        </div>
    );
};

export default ChatsPage;

