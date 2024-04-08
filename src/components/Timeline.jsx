import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import "../index.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Stages() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Timeline align="alternate" className="w-screen max-w-screen-lg">
      <TimelineItem>
        <TimelineSeparator data-aos="fade-in" data-aos-duration="500">
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div
            elevation={3}
            className="py-1 px-3 flex justify-center items-center bg-blue-900 font-bold text-white drop-shadow-md rounded-lg smx:text-sm smxxl:text-xs"
            data-aos="fade-in"
            data-aos-duration="800"
          >
            Browse Collection
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator data-aos="fade-in" data-aos-duration="500">
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div
            elevation={3}
            className="py-1 px-3 flex justify-center items-center bg-blue-900 font-bold text-white drop-shadow-md rounded-lg smx:text-sm smxxl:text-xs"
            data-aos="fade-in"
            data-aos-duration="800"
          >
            Choose Style
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator data-aos="fade-in" data-aos-duration="500">
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div
            elevation={3}
            className="py-1 px-3 flex justify-center items-center bg-blue-900 font-bold text-white drop-shadow-md rounded-lg smx:text-sm smxxl:text-xs"
            data-aos="fade-in"
            data-aos-duration="800"
          >
            Make Purchase
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator data-aos="fade-in" data-aos-duration="500">
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div
            elevation={3}
            className="py-1 px-3 flex justify-center items-center bg-blue-900 font-bold text-white drop-shadow-md rounded-lg smx:text-sm smxxl:text-xs"
            data-aos="fade-in"
            data-aos-duration="800"
          >
            Enjoy Quality
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
