import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — BM Custom",
  description: "Conditions générales d'utilisation du site BM Custom.",
};

const CguPage = () => {
  return (
    <LegalLayout title="Conditions Générales d&apos;Utilisation">
      <p>
        <strong>Date de dernière mise à jour :</strong> 27 février 2026
      </p>

      <section>
        <h2>Article 1 — Objet</h2>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation (ci-après « CGU ») ont pour objet de
          définir les modalités et conditions d&apos;utilisation du site internet bm-custom.com
          (ci-après « le Site »), édité par BM CUSTOMM.
        </p>
        <p>
          L&apos;accès et l&apos;utilisation du Site impliquent l&apos;acceptation pleine et entière des
          présentes CGU. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le Site.
        </p>
      </section>

      <section>
        <h2>Article 2 — Accès au site</h2>
        <p>
          Le Site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à internet.
          Tous les coûts liés à l&apos;accès au Site (matériel informatique, connexion internet, etc.)
          sont à la charge de l&apos;utilisateur.
        </p>
        <p>
          BM CUSTOMM met tout en œuvre pour assurer la disponibilité du Site 24 heures sur 24,
          7 jours sur 7. Toutefois, BM CUSTOMM se réserve le droit de suspendre, interrompre ou
          limiter l&apos;accès au Site, notamment pour des opérations de maintenance, de mise à jour
          ou pour toute autre raison jugée nécessaire, sans préavis ni indemnité.
        </p>
        <p>
          BM CUSTOMM ne saurait être tenue responsable des éventuels dommages résultant de
          l&apos;indisponibilité du Site.
        </p>
      </section>

      <section>
        <h2>Article 3 — Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu du Site (textes, images, photographies, vidéos, logos, graphismes,
          icônes, sons, logiciels, etc.) est la propriété exclusive de BM CUSTOMM ou de ses
          partenaires et est protégé par le droit de la propriété intellectuelle français et
          international.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, transmission, dénaturation,
          totale ou partielle du Site ou de son contenu, par quelque procédé que ce soit, et sur
          quelque support que ce soit, est interdite sans l&apos;autorisation écrite préalable de
          BM CUSTOMM.
        </p>
        <p>
          L&apos;utilisation du Site ne confère à l&apos;utilisateur aucun droit de propriété intellectuelle
          sur le contenu du Site. Toute exploitation non autorisée est susceptible de constituer
          un acte de contrefaçon sanctionné par les articles L.335-2 et suivants du Code de la
          propriété intellectuelle.
        </p>
      </section>

      <section>
        <h2>Article 4 — Responsabilité de l&apos;utilisateur</h2>
        <p>L&apos;utilisateur s&apos;engage à utiliser le Site de manière conforme aux présentes CGU et à :</p>
        <ul>
          <li>Ne pas porter atteinte aux droits de tiers ni à l&apos;ordre public</li>
          <li>Ne pas tenter d&apos;accéder de manière non autorisée aux systèmes du Site</li>
          <li>Ne pas diffuser de contenus illicites, diffamatoires, injurieux ou contraires
            aux bonnes mœurs</li>
          <li>Ne pas utiliser le Site à des fins commerciales non autorisées</li>
          <li>Ne pas introduire de virus, chevaux de Troie ou tout autre programme malveillant</li>
          <li>Fournir des informations exactes et à jour lors de toute interaction avec le Site</li>
        </ul>
        <p>
          En cas de non-respect de ces obligations, BM CUSTOMM se réserve le droit de prendre
          toute mesure appropriée, y compris le blocage de l&apos;accès au Site.
        </p>
      </section>

      <section>
        <h2>Article 5 — Liens hypertextes</h2>
        <p>
          Le Site peut contenir des liens hypertextes vers des sites internet tiers. BM CUSTOMM
          n&apos;exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité
          quant à leur contenu, leurs pratiques en matière de confidentialité ou leur disponibilité.
        </p>
        <p>
          L&apos;insertion de liens hypertextes vers le Site nécessite l&apos;autorisation préalable et
          écrite de BM CUSTOMM. Toute demande peut être adressée à{" "}
          <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a>.
        </p>
      </section>

      <section>
        <h2>Article 6 — Données personnelles</h2>
        <p>
          L&apos;utilisation du Site peut impliquer la collecte de données personnelles. Pour en savoir
          plus sur la collecte, le traitement et la protection de vos données, veuillez consulter
          notre <Link href="/politique-confidentialite">politique de confidentialité</Link>.
        </p>
      </section>

      <section>
        <h2>Article 7 — Cookies</h2>
        <p>
          Le Site utilise des cookies pour améliorer l&apos;expérience de navigation. Pour en savoir
          plus sur les cookies utilisés et gérer vos préférences, consultez
          notre <Link href="/politique-cookies">politique de cookies</Link>.
        </p>
      </section>

      <section>
        <h2>Article 8 — Modification des CGU</h2>
        <p>
          BM CUSTOMM se réserve le droit de modifier les présentes CGU à tout moment, sans
          préavis. Les modifications prennent effet dès leur publication sur le Site.
        </p>
        <p>
          L&apos;utilisateur est invité à consulter régulièrement cette page pour prendre connaissance
          des éventuelles modifications. L&apos;utilisation du Site après la publication de
          modifications vaut acceptation des nouvelles CGU.
        </p>
      </section>

      <section>
        <h2>Article 9 — Droit applicable et juridiction compétente</h2>
        <p>
          Les présentes CGU sont régies par le droit français. En cas de litige relatif à
          l&apos;interprétation ou l&apos;exécution des présentes, et à défaut de résolution amiable,
          les tribunaux compétents de Rennes seront seuls compétents.
        </p>
      </section>

      <section>
        <h2>Article 10 — Contact</h2>
        <p>
          Pour toute question relative aux présentes CGU, vous pouvez nous contacter :
        </p>
        <ul>
          <li><strong>Email :</strong> <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a></li>
          <li><strong>Courrier :</strong> BM CUSTOMM, ZAC des Grands Sillons, 35150 Corps-Nuds</li>
        </ul>
      </section>
    </LegalLayout>
  );
};

export default CguPage;
