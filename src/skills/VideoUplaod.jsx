import CloudinaryUploadWidgetVideo from './CloudinaryUploadWidgetVideo'
import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

const VideoUplaod = ({setVideoUrl}) => {
    const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const [cloudName] = useState("dtesk39pq");
  // Replace with your own upload preset
  const [uploadPreset] = useState("uggiguqp");

    const [uwConfig] = useState({
        cloudName,
        uploadPreset,
        sources: [ "local", "url"],
        multiple: false,
    });

    const cld = new Cloudinary({
        cloud: {
          cloudName
        }
      });

      const myVideo = cld.image(publicId);
  return (
    <div>
        
        <CloudinaryUploadWidgetVideo  setVideoUrl={setVideoUrl} uwConfig={uwConfig} setPublicId={setPublicId}/>
        <div style={{ width: "800px" }}>
                <AdvancedImage
                  style={{ maxWidth: "100%" }}
                  cldImg={myVideo}
                  plugins={[responsive(), placeholder()]}
                />
            </div>
    </div>
  )
}

export default VideoUplaod