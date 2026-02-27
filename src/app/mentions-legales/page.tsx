import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
  title: "Mentions légales — BM Custom",
  description: "Mentions légales du site BM Custom, spécialiste en customisation automobile.",
};

const MentionsLegalesPage = () => {
  return (
    <LegalLayout title="Mentions légales">
      <section>
        <h2>1. Éditeur du site</h2>
        <p>
          Le site <strong>bm-custom.com</strong> est édité par :
        </p>
        <ul>
          <li><strong>Raison sociale :</strong> BM CUSTOMM</li>
          <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
          <li><strong>Dirigeant :</strong> Velat BINGOL</li>
          <li><strong>Adresse :</strong> ZAC des Grands Sillons, 35150 Corps-Nuds</li>
          <li><strong>RCS :</strong> 840 871 222 R.C.S. Rennes</li>
          <li><strong>Code NAF :</strong> 45.20A — Entretien et réparation de véhicules automobiles légers</li>
          <li><strong>Email :</strong> contact@bm-custom.com</li>
          <li><strong>Téléphone :</strong> XX XX XX XX XX</li>
        </ul>
      </section>

      <section>
        <h2>2. Directeur de la publication</h2>
        <p>
          Le directeur de la publication est <strong>Velat BINGOL</strong>, en sa qualité de dirigeant de BM CUSTOMM.
        </p>
      </section>

      <section>
        <h2>3. Hébergeur</h2>
        <p>Le site est hébergé par :</p>
        <ul>
          <li><strong>Raison sociale :</strong> Vercel Inc.</li>
          <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
          <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
        </ul>
      </section>

      <section>
        <h2>4. Conception et développement</h2>
        <p>
          Le site a été conçu et développé par <strong>DVS Web</strong> — <a href="mailto:contact@dvs-web.fr">contact@dvs-web.fr</a>.
        </p>
      </section>

      <section>
        <h2>5. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu du site bm-custom.com (textes, images, photographies, logos, vidéos,
          graphismes, icônes, sons, etc.) est la propriété exclusive de BM CUSTOMM ou de ses partenaires
          et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle,
          de l&apos;un quelconque de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite
          sans l&apos;autorisation écrite préalable de BM CUSTOMM.
        </p>
        <p>
          Toute exploitation non autorisée du site ou de l&apos;un de ses éléments constitutifs sera considérée
          comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles
          L.335-2 et suivants du Code de la propriété intellectuelle.
        </p>
      </section>

      <section>
        <h2>6. Limitation de responsabilité</h2>
        <p>
          BM CUSTOMM s&apos;efforce de fournir sur le site des informations aussi précises que possible.
          Toutefois, BM CUSTOMM ne pourra être tenue responsable des omissions, des inexactitudes et
          des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires
          qui lui fournissent ces informations.
        </p>
        <p>
          Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles
          d&apos;évoluer. Les informations contenues sur le site ne sont pas contractuelles.
        </p>
        <p>
          BM CUSTOMM ne pourra être tenue responsable des dommages directs ou indirects causés au
          matériel de l&apos;utilisateur lors de l&apos;accès au site bm-custom.com.
        </p>
      </section>

      <section>
        <h2>7. Liens hypertextes</h2>
        <p>
          Le site bm-custom.com peut contenir des liens hypertextes vers d&apos;autres sites internet.
          BM CUSTOMM ne dispose d&apos;aucun moyen de contrôle du contenu de ces sites tiers et décline
          toute responsabilité quant à leur contenu.
        </p>
      </section>

      <section>
        <h2>8. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut
          de résolution amiable, les tribunaux compétents de Rennes seront seuls compétents pour connaître
          du litige.
        </p>
      </section>
    </LegalLayout>
  );
};

export default MentionsLegalesPage;
