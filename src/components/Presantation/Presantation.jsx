import logo from "../../assets/logo_perso.png";

export default function Presantation() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl rounded-none bg-opacity-0 my-10 mx-10">
      <figure className="object-cover w-full h-52">
        <img src={logo} alt="photo de moi" />
      </figure>
      <div className="card-body">
        <p>
          "Je suis actuellement en formation de développement web et web mobile
          pour une durée de 6 mois à l'École O'Clock. J'ai toujours été
          intéressé par l'informatique, le numérique, le web et les nouvelles
          technologies. J'ai la chance de pouvoir suivre une formation pour
          devenir développeur web et ainsi pouvoir travailler dans un monde qui
          me passionne. Ma capacité à résoudre les problèmes, mon goût pour le
          travail en équipe et ma détermination sont des atouts qui seront
          précieux dans le domaine du développement web. A la fin de ma
          formation O'Clock, je serais capable de développer la partie front-
          end et back-end d'une application web en intégrant les recommandations
          de sécurité."
        </p>
      </div>
    </div>
  );
}
