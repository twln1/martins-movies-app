import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export default function PlayButton() {
  return (
    <a href="#">
      <div className="bg-[#9c27b0] text-white w-16 h-16 flex items-center justify-center rounded-full transition duration-300 shadow-lg hover:scale-105 shadow-[#9c27b0] cursor-pointer">
        <PlayArrowIcon style={{ fontSize: 24 }} />
      </div>
    </a>
  );
}
