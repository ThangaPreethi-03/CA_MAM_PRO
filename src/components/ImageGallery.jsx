import us1 from "../assets/us1.jpg";
import us2 from "../assets/us2.jpg";
import us3 from "../assets/us3.jpg";
import receiver from "../assets/receiver.jpg";

export default function Gallery() {
  return (
    <>
      <h3>Prepared By Us</h3>
      <div style={grid}>
        {[us1, us2, us3].map((img, i) => (
          <img key={i} src={img} style={imgStyle} />
        ))}
      </div>

      <h3>For You</h3>
      <img src={receiver} style={receiverStyle} />
    </>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(90px,1fr))",
  gap: "14px",
  maxWidth: "360px",
  margin: "20px auto",
};

const imgStyle = {
  width: "100%",
  borderRadius: "16px",
};

const receiverStyle = {
  width: "140px",
  borderRadius: "50%",
  marginTop: "18px",
};
