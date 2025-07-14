import React from "react";
import AnalyticsBarChart from "../../components/AnalyticsBar";
import AnalyticsPieChart from "../../components/AnalyticsPie";
import AnalyticsLineChart from "../../components/AnalyticsLine";

type VideoCard = {
  title: string;
  src: string;
  iframeTitle: string;
};

const videoData: VideoCard[] = [
  {
    title: "Customer and Zone-based Counting",
    src: "https://www.youtube.com/embed/JQ-34djHUB8?playlist=JQ-34djHUB8&loop=1&autoplay=1&mute=1&controls=0",
    iframeTitle: "Zone",
  },
  {
    title: "Heatmap Overlay",
    src: "https://www.youtube.com/embed/9spjlnyxbYE?playlist=9spjlnyxbYE&loop=1&autoplay=1&mute=1&controls=0",
    iframeTitle: "Heat Map",
  },
];

const PostAnalyticsPage = () => {
  return (
    <div className="container">
      <div className="card sm:flex-row gap-4">
        {videoData.map((video, index) => (
          <div key={index} className="w-full flex flex-col gap-4">
            <h1 className="font-semibold text-base">{video.title}</h1>
            <div className="w-full border-2 border-[var(--bluetext)] dark:border-[var(--periwinkle)] rounded-lg">
              <iframe
                src={video.src}
                title={video.iframeTitle}
                allow="autoplay; encrypted-media; accelerometer; mute; clipboard-write; gyroscope; picture-in-picture; web-share"
                className="w-full aspect-[3/2] object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>

      <div className=" w-full flex flex-col sm:flex-row gap-4">
        <div className=" w-full sm:w-1/3">
          <AnalyticsPieChart page="analytics" />
        </div>
        <div className=" w-full sm:w-1/3">
          <AnalyticsLineChart page="analytics" />
        </div>
        <div className=" w-full sm:w-1/3">
          <AnalyticsBarChart page="analytics" />
        </div>
      </div>
    </div>
  );
};

export default PostAnalyticsPage;
