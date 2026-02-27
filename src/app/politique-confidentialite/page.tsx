import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
  title: "Politique de confidentialité — BM Custom",
  description: "Politique de confidentialité et protection des données personnelles de BM Custom.",
};

const PolitiqueConfidentialitePage = () => {
  return (
    <LegalLayout title="Politique de confidentialité">
      <p>
        <strong>Date de dernière mise à jour :</strong> 27 février 2026
      </p>
      <p>
        BM CUSTOMM s&apos;engage à protéger la vie privée des utilisateurs de son site internet
        bm-custom.com. La présente politique de confidentialité décrit la manière dont vos
        données personnelles sont collectées, utilisées et protégées, conformément au Règlement
        Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi
        Informatique et Libertés du 6 janvier 1978 modifiée.
      </p>

      <section>
        <h2>1. Responsable du traitement</h2>
        <p>Le responsable du traitement des données personnelles est :</p>
        <ul>
          <li><strong>Raison sociale :</strong> BM CUSTOMM</li>
          <li><strong>Dirigeant :</strong> Velat BINGOL</li>
          <li><strong>Adresse :</strong> ZAC des Grands Sillons, 35150 Corps-Nuds</li>
          <li><strong>Email :</strong> <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a></li>
          <li><strong>Téléphone :</strong> XX XX XX XX XX</li>
        </ul>
      </section>

      <section>
        <h2>2. Données personnelles collectées</h2>
        <p>
          Nous collectons les données personnelles suivantes, selon les interactions que vous
          avez avec notre site :
        </p>

        <h3>a) Via le formulaire de contact</h3>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone (optionnel)</li>
          <li>Contenu du message</li>
        </ul>

        <h3>b) Via les commandes en ligne</h3>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Adresse de livraison et de facturation</li>
          <li>Numéro de téléphone</li>
          <li>Données de paiement (traitées directement par Stripe, non stockées par BM CUSTOMM)</li>
        </ul>

        <h3>c) Via la navigation sur le site</h3>
        <ul>
          <li>Adresse IP</li>
          <li>Type de navigateur et système d&apos;exploitation</li>
          <li>Pages consultées et durée de visite</li>
          <li>Cookies (voir notre <Link href="/politique-cookies">politique de cookies</Link>)</li>
        </ul>
      </section>

      <section>
        <h2>3. Finalités du traitement</h2>
        <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
        <ul>
          <li>Traitement et suivi des commandes</li>
          <li>Gestion de la relation client et réponse aux demandes de contact</li>
          <li>Envoi de communications commerciales (uniquement avec votre consentement)</li>
          <li>Amélioration du site et de l&apos;expérience utilisateur</li>
          <li>Respect des obligations légales et réglementaires</li>
          <li>Gestion de la facturation et de la comptabilité</li>
        </ul>
      </section>

      <section>
        <h2>4. Base légale du traitement</h2>
        <p>Le traitement de vos données repose sur les bases légales suivantes :</p>
        <ul>
          <li>
            <strong>Exécution d&apos;un contrat :</strong> traitement des commandes, livraison,
            gestion du compte client
          </li>
          <li>
            <strong>Consentement :</strong> envoi de newsletters et communications commerciales,
            utilisation de cookies non essentiels
          </li>
          <li>
            <strong>Intérêt légitime :</strong> amélioration du site, statistiques de fréquentation,
            prévention de la fraude
          </li>
          <li>
            <strong>Obligation légale :</strong> conservation des factures et données comptables
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Durée de conservation</h2>
        <p>Vos données personnelles sont conservées pendant les durées suivantes :</p>
        <ul>
          <li>
            <strong>Données de commande :</strong> 5 ans à compter de la dernière commande
            (obligation comptable)
          </li>
          <li>
            <strong>Données du formulaire de contact :</strong> 3 ans à compter du dernier contact
          </li>
          <li>
            <strong>Données de navigation :</strong> 13 mois maximum
          </li>
          <li>
            <strong>Consentement cookies :</strong> 6 mois maximum
          </li>
        </ul>
        <p>
          Au-delà de ces durées, vos données sont supprimées ou anonymisées de manière irréversible.
        </p>
      </section>

      <section>
        <h2>6. Destinataires des données</h2>
        <p>
          Vos données personnelles peuvent être transmises aux destinataires suivants,
          dans le strict cadre des finalités énoncées ci-dessus :
        </p>
        <ul>
          <li>
            <strong>Stripe</strong> — prestataire de paiement sécurisé. Stripe traite vos données
            de paiement conformément à sa propre politique de confidentialité :{" "}
            <a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer">
              stripe.com/fr/privacy
            </a>
          </li>
          <li>
            <strong>Vercel Inc.</strong> — hébergeur du site internet (données de navigation)
          </li>
          <li>
            <strong>Fournisseurs et transporteurs</strong> — pour la livraison des commandes
            (nom, adresse, téléphone)
          </li>
        </ul>
        <p>
          Aucune donnée personnelle n&apos;est cédée ou vendue à des tiers à des fins commerciales.
        </p>
        <p>
          Certains de ces destinataires peuvent être situés en dehors de l&apos;Union européenne.
          Dans ce cas, les transferts sont encadrés par des garanties appropriées (clauses
          contractuelles types de la Commission européenne, décision d&apos;adéquation, ou mécanismes
          de certification).
        </p>
      </section>

      <section>
        <h2>7. Vos droits</h2>
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits
          suivants concernant vos données personnelles :
        </p>
        <ul>
          <li>
            <strong>Droit d&apos;accès :</strong> obtenir la confirmation que vos données sont traitées
            et en obtenir une copie
          </li>
          <li>
            <strong>Droit de rectification :</strong> demander la correction de données inexactes
            ou incomplètes
          </li>
          <li>
            <strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données dans
            les conditions prévues par le RGPD
          </li>
          <li>
            <strong>Droit à la limitation :</strong> demander la limitation du traitement de vos
            données dans certains cas
          </li>
          <li>
            <strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré
            et couramment utilisé
          </li>
          <li>
            <strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données pour
            des motifs légitimes
          </li>
          <li>
            <strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout
            moment pour les traitements basés sur celui-ci
          </li>
        </ul>
        <p>
          Pour exercer vos droits, adressez votre demande par email à{" "}
          <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a> ou par courrier à :
          BM CUSTOMM, ZAC des Grands Sillons, 35150 Corps-Nuds. Une pièce d&apos;identité pourra
          vous être demandée.
        </p>
        <p>
          Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois. En cas de
          difficulté, vous pouvez introduire une réclamation auprès de la CNIL :{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
        </p>
      </section>

      <section>
        <h2>8. Cookies</h2>
        <p>
          Le site bm-custom.com utilise des cookies pour améliorer votre expérience de navigation.
          Pour en savoir plus sur les cookies utilisés et gérer vos préférences, consultez
          notre <Link href="/politique-cookies">politique de cookies</Link>.
        </p>
      </section>

      <section>
        <h2>9. Sécurité</h2>
        <p>
          BM CUSTOMM met en œuvre les mesures techniques et organisationnelles appropriées pour
          assurer la sécurité et la confidentialité de vos données personnelles, notamment :
        </p>
        <ul>
          <li>Chiffrement des communications via HTTPS/TLS</li>
          <li>Paiements sécurisés via Stripe (certification PCI-DSS)</li>
          <li>Accès restreint aux données personnelles</li>
          <li>Hébergement sécurisé chez Vercel</li>
        </ul>
      </section>

      <section>
        <h2>10. Modification de la politique</h2>
        <p>
          BM CUSTOMM se réserve le droit de modifier la présente politique de confidentialité
          à tout moment. Les modifications entreront en vigueur dès leur publication sur le site.
          Nous vous invitons à consulter régulièrement cette page.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          Pour toute question relative à la présente politique de confidentialité ou à vos données
          personnelles, vous pouvez nous contacter :
        </p>
        <ul>
          <li><strong>Email :</strong> <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a></li>
          <li><strong>Courrier :</strong> BM CUSTOMM, ZAC des Grands Sillons, 35150 Corps-Nuds</li>
        </ul>
      </section>
    </LegalLayout>
  );
};

export default PolitiqueConfidentialitePage;
