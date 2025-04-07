import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Loader() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-purple-300 absolute animate-ping duration-300" />
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-purple-600 shadow-lg opacity-35">
          <PlayCircleIcon className="text-white" sx={{ fontSize: 48 }} />
        </div>
      </div>
    </div>
  );
}
