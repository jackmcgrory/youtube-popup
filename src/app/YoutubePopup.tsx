'use client'
import { useState } from "react";
import { DialogBox, VideoFrame } from "./YoutubePopup.styles";

export interface YoutubePopUpProps {
    buttonText: string;
    autoplay: boolean;
    mute: boolean;
    setwidth: boolean;
    playinline: boolean;
}

export const YoutubePopup = ({
    buttonText,
    autoplay,
    mute,
    setwidth,
    playinline
}: YoutubePopUpProps) => {
    const videoUrl = `https://www.youtube.com/embed/McqmnU1vVe4?autoplay=${autoplay ? '1' : '0'}&mute=${mute ? '1' : '0'}&playsinline=${playinline ? 1 : 0}`

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>{buttonText}</button>
            {isOpen &&
                <DialogBox >
                    <button onClick={() => setIsOpen(false)}>Close this</button>
                    <VideoFrame 
                        src={videoUrl}
                        $fixedWidth={setwidth}
                        title="YouTube bideo player"
                        data-testid="video-frame"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                </DialogBox>
            }
        </>
    )

}