import bandeauHeader from "../../assets/bandeau_header.jpg";

export default function Header() {
  return (
    <div className="w-screen">
      <img
        className="object-cover max-h-48 top-0 w-screen"
        src={bandeauHeader}
        alt="bandeau haut de page"
      />
    </div>
  );
}
