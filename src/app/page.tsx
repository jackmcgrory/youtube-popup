import { YoutubePopup } from "./YoutubePopup";

export default function Home() {
  return (
    <div>
      <h1>Welcome - testing youtube variants</h1>
      <YoutubePopup buttonText={"Existing behaviour"} autoplay={true} mute={false} setwidth={false} playinline={false}/>
      <YoutubePopup buttonText={"add mute"} autoplay={true} mute={true} setwidth={false} playinline={false}/>
      <YoutubePopup buttonText={"add width"} autoplay={true} mute={false} setwidth={true} playinline={false}/>
      <YoutubePopup buttonText={"add inline"} autoplay={true} mute={false} setwidth={false} playinline={true}/>
      <YoutubePopup buttonText={"add mute and inline"} autoplay={true} mute={true} setwidth={false} playinline={true}/>
      <YoutubePopup buttonText={"add mute and width"} autoplay={true} mute={true} setwidth={true} playinline={false}/>
      <YoutubePopup buttonText={"add width and inline"} autoplay={true} mute={false} setwidth={true} playinline={true}/>
      <YoutubePopup buttonText={"add all three"} autoplay={true} mute={true} setwidth={true} playinline={true}/>
      <YoutubePopup buttonText={"no autoplay at all"} autoplay={false} mute={false} setwidth={false} playinline={false}/>
    </div>
  );
}
