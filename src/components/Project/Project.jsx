import maquette from "../../assets/maquette_collexion.png";

export default function Project() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl rounded-none bg-opacity-0 my-10 mx-10">
      <figure>
        <img src={maquette} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
}
