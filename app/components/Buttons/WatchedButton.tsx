import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useWatched } from "@/app/hooks/useWatched";

export default function WatchedButton({ id }: { id: number }) {
  const { isWatched, toggleWatched } = useWatched(id);

  return (
    <Button onClick={toggleWatched} color={isWatched ? "primary" : "success"}>
      <span className="pr-2">{isWatched ? "Unwatch" : "Watch"}</span>
      {isWatched ? (
        <VisibilityOffIcon style={{ color: "red", fontSize: "medium" }} />
      ) : (
        <VisibilityIcon style={{ color: "green", fontSize: "medium" }} />
      )}
    </Button>
  );
}
