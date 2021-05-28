import TaskbarClock from "./TaskbarClock";
import { InsetPanel } from "./Taskbar";
import VolumeIcon from "./volume/VolumeIcon";

const NotificationArea: React.FC = () => {
  return (
    <InsetPanel style={{marginLeft: 'auto'}}>
      <VolumeIcon />
      <div style={{marginLeft: '6px', marginRight: '6px'}}>
        <TaskbarClock />
      </div>
    </InsetPanel>
  )
}

export default NotificationArea;