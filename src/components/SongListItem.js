export function SongListItem({ song, isCurrent, onSelect }) {
  const backgroundColor = isCurrent ? "darkslategrey" : "inherit";
  const color = isCurrent ? "white" : "inherit";
  const style = { backgroundColor, color };

  function handleClick() {
    onSelect(song);
  }

  return (
    <li style={style} onClick={handleClick}>
      {song.title} by {song.artist}
    </li>
  );
}
