import TaskbarClock from "./TaskbarClock";
import { InsetPanel } from "./Taskbar";

const NotificationArea: React.FC = () => {
  return (
    <InsetPanel style={{marginLeft: 'auto'}}>
      <div className="icon-loudspeaker_rays_16" />
      <div style={{marginLeft: '6px', marginRight: '6px'}}>
        <TaskbarClock />
      </div>
    </InsetPanel>
  )
}

export default NotificationArea;