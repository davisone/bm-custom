import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — BM Custom",
  description: "Conditions générales de vente du site e-commerce BM Custom.",
};

const CgvPage = () => {
  return (
    <LegalLayout title="Conditions Générales de Vente">
      <p>
        <strong>Date de dernière mise à jour :</strong> 27 février 2026
      </p>

      <section>
        <h2>Article 1 — Objet</h2>
        <p>
          Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent l&apos;ensemble des
          ventes de produits et services proposés par BM CUSTOMM (RCS 840 871 222 R.C.S. Rennes)
          sur le site <strong>bm-custom.com</strong>.
        </p>
        <p>
          Toute commande passée sur le site implique l&apos;acceptation sans réserve des présentes CGV
          par le client.
        </p>
      </section>

      <section>
        <h2>Article 2 — Produits et services</h2>
        <p>
          BM CUSTOMM propose à la vente des produits et services liés à la customisation, l&apos;entretien
          et la préparation esthétique de véhicules automobiles, notamment :
        </p>
        <ul>
          <li>Nettoyage automobile et détailing</li>
          <li>Lustrage et polissage</li>
          <li>Préparation esthétique</li>
          <li>Covering et film de protection</li>
          <li>Ajout d&apos;options et accessoires (LED d&apos;ambiance, ciel étoilé, CarPlay, etc.)</li>
          <li>Produits d&apos;entretien et accessoires vendus en ligne</li>
        </ul>
        <p>
          Les produits sont décrits et présentés avec la plus grande exactitude possible. Toutefois,
          les photographies n&apos;ont pas de valeur contractuelle. En cas d&apos;erreur non substantielle entre
          la présentation et le produit livré, BM CUSTOMM ne saurait voir sa responsabilité engagée.
        </p>
      </section>

      <section>
        <h2>Article 3 — Prix</h2>
        <p>
          Les prix des produits et services sont indiqués en euros toutes taxes comprises (TTC).
          BM CUSTOMM se réserve le droit de modifier ses prix à tout moment, mais les produits seront
          facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
        </p>
      </section>

      <section>
        <h2>Article 4 — Commande</h2>
        <p>Le processus de commande se déroule comme suit :</p>
        <ol>
          <li>Sélection des produits et ajout au panier</li>
          <li>Vérification du contenu du panier</li>
          <li>Renseignement des informations de livraison</li>
          <li>Choix du mode de paiement</li>
          <li>Validation et paiement de la commande</li>
        </ol>
        <p>
          La commande n&apos;est définitivement confirmée qu&apos;après réception du paiement intégral.
          Un email de confirmation récapitulant la commande sera envoyé au client.
        </p>
        <p>
          BM CUSTOMM se réserve le droit de refuser ou d&apos;annuler toute commande d&apos;un client avec
          lequel il existerait un litige relatif au paiement d&apos;une commande antérieure.
        </p>
      </section>

      <section>
        <h2>Article 5 — Paiement</h2>
        <p>
          Le paiement s&apos;effectue en ligne par carte bancaire via la plateforme sécurisée
          {" "}<strong>Stripe</strong>. Les données bancaires du client sont chiffrées et ne transitent
          pas par les serveurs de BM CUSTOMM.
        </p>
        <p>
          Stripe est certifié PCI-DSS niveau 1, le plus haut niveau de certification de sécurité
          dans l&apos;industrie des paiements. Pour plus d&apos;informations :{" "}
          <a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer">
            stripe.com/fr/privacy
          </a>.
        </p>
        <p>
          Le paiement est exigible immédiatement à la commande. La commande est validée après
          confirmation du paiement par Stripe.
        </p>
      </section>

      <section>
        <h2>Article 6 — Livraison</h2>
        <p>
          La livraison des produits commandés est assurée par le fournisseur ou un transporteur
          partenaire, à l&apos;adresse indiquée par le client lors de la commande.
        </p>
        <p>
          Les délais de livraison sont indiqués à titre informatif. BM CUSTOMM ne saurait être
          tenue responsable des retards de livraison dus au transporteur ou à un cas de force majeure.
        </p>
        <p>
          En cas de produit endommagé ou manquant à la réception, le client doit émettre ses
          réserves auprès du transporteur et en informer BM CUSTOMM dans un délai de 3 jours
          ouvrés suivant la livraison à l&apos;adresse <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a>.
        </p>
      </section>

      <section>
        <h2>Article 7 — Droit de rétractation</h2>
        <p>
          Conformément aux articles L.221-18 et suivants du Code de la consommation, le client
          dispose d&apos;un délai de <strong>14 jours calendaires</strong> à compter de la réception du
          produit pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à
          payer de pénalité.
        </p>
        <p>
          Pour exercer ce droit, le client doit notifier sa décision de rétractation au moyen
          d&apos;une déclaration claire à l&apos;adresse <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a>{" "}
          ou par courrier à : BM CUSTOMM, ZAC des Grands Sillons, 35150 Corps-Nuds.
        </p>
        <p>
          Le produit devra être retourné dans son emballage d&apos;origine, en parfait état, dans un
          délai de 14 jours suivant la notification de rétractation. Les frais de retour sont
          à la charge du client.
        </p>
        <p>
          Pour plus de détails, consultez notre{" "}
          <Link href="/politique-retour">politique de retour et remboursement</Link>.
        </p>
        <h3>Exceptions au droit de rétractation</h3>
        <p>
          Conformément à l&apos;article L.221-28 du Code de la consommation, le droit de rétractation
          ne peut être exercé pour :
        </p>
        <ul>
          <li>Les prestations de services pleinement exécutées avant la fin du délai de rétractation
            et dont l&apos;exécution a commencé avec l&apos;accord du consommateur</li>
          <li>Les biens confectionnés selon les spécifications du consommateur ou nettement personnalisés</li>
          <li>Les biens descellés après la livraison et ne pouvant être renvoyés pour des raisons
            d&apos;hygiène ou de protection de la santé</li>
        </ul>
      </section>

      <section>
        <h2>Article 8 — Garanties</h2>
        <p>
          Tous les produits vendus sur le site bénéficient de la garantie légale de conformité
          (articles L.217-4 à L.217-14 du Code de la consommation) et de la garantie contre les
          vices cachés (articles 1641 à 1649 du Code civil).
        </p>
        <p>
          En cas de défaut de conformité, le client peut demander la réparation ou le remplacement
          du produit, conformément à l&apos;article L.217-9 du Code de la consommation. Si la réparation
          ou le remplacement est impossible, le client peut retourner le produit et obtenir un
          remboursement intégral.
        </p>
      </section>

      <section>
        <h2>Article 9 — Responsabilité</h2>
        <p>
          BM CUSTOMM ne saurait être tenue responsable de l&apos;inexécution du contrat en cas de
          force majeure, de perturbation ou de grève totale ou partielle des services postaux
          et moyens de transport et/ou communications.
        </p>
        <p>
          La responsabilité de BM CUSTOMM est limitée au montant de la commande concernée. BM CUSTOMM
          ne saurait être tenue responsable des dommages indirects résultant de la vente des produits.
        </p>
      </section>

      <section>
        <h2>Article 10 — Données personnelles</h2>
        <p>
          Les informations collectées lors de la commande sont nécessaires au traitement de celle-ci.
          Elles sont traitées conformément au Règlement Général sur la Protection des Données (RGPD)
          et à la loi Informatique et Libertés.
        </p>
        <p>
          Pour en savoir plus sur la collecte et le traitement de vos données, veuillez consulter
          notre <Link href="/politique-confidentialite">politique de confidentialité</Link>.
        </p>
      </section>

      <section>
        <h2>Article 11 — Service client</h2>
        <p>
          Pour toute question ou réclamation, le client peut contacter BM CUSTOMM :
        </p>
        <ul>
          <li><strong>Email :</strong> <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a></li>
          <li><strong>Téléphone :</strong> XX XX XX XX XX</li>
          <li><strong>Courrier :</strong> BM CUSTOMM, ZAC des Grands Sillons, 35150 Corps-Nuds</li>
        </ul>
      </section>

      <section>
        <h2>Article 12 — Médiation</h2>
        <p>
          Conformément aux articles L.611-1 et suivants du Code de la consommation, en cas de
          litige non résolu, le client peut recourir gratuitement à un médiateur de la consommation.
          Le médiateur compétent sera communiqué sur simple demande à l&apos;adresse{" "}
          <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a>.
        </p>
        <p>
          Le client peut également déposer une réclamation sur la plateforme européenne de
          règlement en ligne des litiges :{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>.
        </p>
      </section>

      <section>
        <h2>Article 13 — Droit applicable</h2>
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, et après tentative
          de résolution amiable, les tribunaux compétents de Rennes seront seuls compétents.
        </p>
      </section>
    </LegalLayout>
  );
};

export default CgvPage;
