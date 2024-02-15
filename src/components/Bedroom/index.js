export default function Bedroom({ height, width }) {
  return (
    <div
      className="bedRoomComponent"
      style={{
        width: width,
        height: height,
      }}
    >
      <h1>height: {height}</h1>
      <h1>width: {width}</h1>
    </div>
  );
}