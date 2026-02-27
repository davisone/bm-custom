import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
  title: "Politique de retour et remboursement — BM Custom",
  description: "Politique de retour et remboursement de BM Custom. Droit de rétractation, conditions et procédure.",
};

const PolitiqueRetourPage = () => {
  return (
    <LegalLayout title="Politique de retour et remboursement">
      <p>
        <strong>Date de dernière mise à jour :</strong> 27 février 2026
      </p>
      <p>
        Chez BM CUSTOMM, votre satisfaction est notre priorité. Cette page vous informe
        sur vos droits en matière de retour et de remboursement conformément au Code de la
        consommation.
      </p>

      <section>
        <h2>1. Droit de rétractation</h2>
        <p>
          Conformément aux articles L.221-18 et suivants du Code de la consommation, vous
          disposez d&apos;un délai de <strong>14 jours calendaires</strong> à compter de la
          réception de votre commande pour exercer votre droit de rétractation, sans avoir
          à justifier de motifs ni à payer de pénalité.
        </p>
        <p>
          Ce délai court à compter du jour de la réception du produit par vous-même ou par
          un tiers désigné par vous (autre que le transporteur).
        </p>
        <p>
          En cas de commande portant sur plusieurs produits livrés séparément, le délai court
          à compter de la réception du dernier produit.
        </p>
      </section>

      <section>
        <h2>2. Conditions de retour</h2>
        <p>Pour être accepté, le retour doit respecter les conditions suivantes :</p>
        <ul>
          <li>Le produit doit être retourné dans son emballage d&apos;origine, intact et complet</li>
          <li>Le produit ne doit pas avoir été utilisé, sali ou endommagé</li>
          <li>Tous les accessoires, notices et étiquettes doivent être inclus</li>
          <li>Le retour doit être effectué dans les 14 jours suivant la notification de
            rétractation</li>
        </ul>
        <p>
          Les produits retournés incomplets, abîmés, endommagés ou salis par le client ne
          seront pas repris. BM CUSTOMM se réserve le droit de refuser un retour ne respectant
          pas ces conditions.
        </p>
      </section>

      <section>
        <h2>3. Procédure de retour</h2>
        <p>Pour effectuer un retour, suivez les étapes suivantes :</p>
        <ol>
          <li>
            <strong>Contactez-nous</strong> par email à{" "}
            <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a> en indiquant
            votre numéro de commande et le(s) produit(s) concerné(s), ainsi que le motif
            du retour
          </li>
          <li>
            <strong>Recevez notre confirmation</strong> avec les instructions de retour et
            l&apos;adresse d&apos;expédition
          </li>
          <li>
            <strong>Emballez soigneusement</strong> le produit dans son emballage d&apos;origine
          </li>
          <li>
            <strong>Expédiez le colis</strong> en conservant la preuve d&apos;envoi (numéro de
            suivi recommandé)
          </li>
        </ol>
        <p>
          Les frais de retour sont à la charge du client, sauf en cas de produit défectueux,
          non conforme ou d&apos;erreur de livraison imputable à BM CUSTOMM.
        </p>
      </section>

      <section>
        <h2>4. Remboursement</h2>
        <p>
          Le remboursement sera effectué dans un délai maximum de <strong>14 jours</strong> à
          compter de la réception du produit retourné ou de la preuve d&apos;expédition du retour
          (la date retenue étant la première de ces deux).
        </p>
        <p>
          Le remboursement sera effectué par le même moyen de paiement que celui utilisé lors
          de la commande initiale, sauf accord exprès du client pour un autre moyen.
        </p>
        <p>
          Le remboursement porte sur le prix du ou des produits retournés. Les frais de
          livraison initiaux sont remboursés si le retour porte sur la totalité de la commande.
          En cas de retour partiel, les frais de livraison restent à la charge du client.
        </p>
      </section>

      <section>
        <h2>5. Exceptions au droit de rétractation</h2>
        <p>
          Conformément à l&apos;article L.221-28 du Code de la consommation, le droit de
          rétractation ne s&apos;applique pas dans les cas suivants :
        </p>
        <ul>
          <li>
            <strong>Services pleinement exécutés :</strong> prestations de services dont
            l&apos;exécution a commencé avec votre accord et qui ont été pleinement exécutées
            avant la fin du délai de rétractation (ex. : nettoyage, polissage, covering
            déjà réalisé)
          </li>
          <li>
            <strong>Produits personnalisés :</strong> biens confectionnés selon vos
            spécifications ou nettement personnalisés (ex. : pièces sur mesure, covering
            découpé sur mesure)
          </li>
          <li>
            <strong>Produits descellés :</strong> biens descellés après la livraison et ne
            pouvant être renvoyés pour des raisons d&apos;hygiène ou de protection de la santé
          </li>
          <li>
            <strong>Produits mélangés :</strong> biens qui, après avoir été livrés et de par
            leur nature, sont mélangés de manière indissociable avec d&apos;autres articles
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Produit défectueux ou non conforme</h2>
        <p>
          Si vous recevez un produit défectueux, endommagé ou non conforme à votre commande,
          contactez-nous dans un délai de <strong>3 jours ouvrés</strong> suivant la réception
          à l&apos;adresse <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a>.
        </p>
        <p>
          Joignez à votre email des photographies du produit et de l&apos;emballage. Après
          vérification, nous organiserons le retour à nos frais et procéderons au remplacement
          ou au remboursement intégral, selon votre choix.
        </p>
        <p>
          Les produits bénéficient de la garantie légale de conformité (articles L.217-4 et
          suivants du Code de la consommation) et de la garantie des vices cachés (articles
          1641 et suivants du Code civil). Pour plus de détails, consultez
          nos <Link href="/cgv">conditions générales de vente</Link>.
        </p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>
          Pour toute question relative aux retours et remboursements, n&apos;hésitez pas à nous
          contacter :
        </p>
        <ul>
          <li><strong>Email :</strong> <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a></li>
          <li><strong>Téléphone :</strong> XX XX XX XX XX</li>
          <li><strong>Courrier :</strong> BM CUSTOMM, ZAC des Grands Sillons, 35150 Corps-Nuds</li>
        </ul>
      </section>
    </LegalLayout>
  );
};

export default PolitiqueRetourPage;
