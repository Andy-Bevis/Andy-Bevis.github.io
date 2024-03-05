import bandeauHeader from '../../assets/bandeau_header.jpg';

export default function Header() {
  return (
    <div>
      <img className='columns-1 h-80 top-0 w-screen' src={bandeauHeader} alt="bandeau haut de page" />
    </div>
  );
}
