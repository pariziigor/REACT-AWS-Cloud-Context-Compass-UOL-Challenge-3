import { PiStar } from "react-icons/Pi";
import { BsEmojiSmile, BsHeart } from "react-icons/Bs";
import { AiOutlineLike } from "react-icons/Ai";

function InfoEmoji() {
  return (
    <div className="text-dark-10 flex gap-10 text-base">
      <div className="space-y-0.5">
        <p>Fãs</p>
        <div className="flex items-center space-x-1">
          <PiStar className="text-support-03" />
          <p className="text-sm text-dark-20">85</p>
        </div>
      </div>
      <div className="space-y-0.5">
        <p>Confiável</p>
        <div className="flex items-center space-x-1 gap-1">
          <BsEmojiSmile className="text-support-03" />
          <BsEmojiSmile className="text-support-03" />
        </div>
      </div>
      <div className="space-y-0.5">
        <p>Legal</p>
        <div className="flex items-center space-x-1 gap-1">
          <AiOutlineLike className="text-[#26CAFF]" />
          <AiOutlineLike className="text-[#26CAFF]" />
          <AiOutlineLike className="text-[#26CAFF]" />
        </div>
      </div>
      <div className="space-y-0.5">
        <p>Sexy</p>
        <div className="flex items-center space-x-1 gap-1">
          <BsHeart className="text-support-04" />
          <BsHeart className="text-support-04" />
          
        </div>
      </div>
    </div>
  )
}

export default InfoEmoji