import React from "react";

const HeatmappingPage = () => {
  return (
    <section className="container">
      <iframe
        src="https://www.youtube.com/embed/5hH3Say3UNM?playlist=5hH3Say3UNM&loop=1&autoplay=1&mute=1&controls=0"
        title="Heat Mapping"
        allow="autoplay; encrypted-media; accelerometer; mute; clipboard-write; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-[1920/737] object-cover rounded-md"
      />
      <div className="space-y-2 text-xs">
        <strong>Disclaimer:</strong>
        <p className="italic">
          This Real-Time Analysis page was developed solely to demonstrate the
          customer counting module, showcasing the object detection, tracking,
          and re-identification capabilities of the system. It was used for
          presentation purposes during the final defense and to support live
          demonstrations when needed. As stated in the thesis, the scope of this
          study is limited to post-event analysis. Thus, real-time analytics are
          not part of the system&apos;s official implementation.
        </p>
      </div>
    </section>
  );
};

export default HeatmappingPage;
