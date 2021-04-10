import TaskbarClock from "./TaskbarClock";
import { InsetPanel } from "./Taskbar";

const NotificationArea: React.FC = () => {
  return (
    <InsetPanel style={{marginLeft: 'auto'}}>
      <img src="/assets/icons/loudspeaker_rays-16.png" alt="Volume" />
      <div style={{marginLeft: '6px', marginRight: '6px'}}>
        <TaskbarClock />
      </div>
    </InsetPanel>
  )
}

export default NotificationArea;