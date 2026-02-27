import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/ui/legal-layout";

export const metadata: Metadata = {
  title: "Politique de cookies — BM Custom",
  description: "Politique de cookies du site BM Custom. Informations sur les cookies utilisés et gestion de vos préférences.",
};

const PolitiqueCookiesPage = () => {
  return (
    <LegalLayout title="Politique de cookies">
      <p>
        <strong>Date de dernière mise à jour :</strong> 27 février 2026
      </p>
      <p>
        La présente politique de cookies vous informe sur l&apos;utilisation des cookies et
        technologies similaires sur le site bm-custom.com, édité par BM CUSTOMM.
      </p>

      <section>
        <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone,
          tablette) lors de votre visite sur un site internet. Il permet au site de mémoriser
          certaines informations relatives à votre navigation, afin de faciliter vos visites
          ultérieures et de rendre le site plus convivial.
        </p>
        <p>
          Les cookies ne contiennent pas d&apos;informations personnelles permettant de vous
          identifier directement et ne peuvent pas endommager votre terminal.
        </p>
      </section>

      <section>
        <h2>2. Cookies utilisés sur le site</h2>

        <h3>a) Cookies strictement nécessaires</h3>
        <p>
          Ces cookies sont indispensables au bon fonctionnement du site. Ils ne peuvent pas être
          désactivés sans altérer le fonctionnement du site.
        </p>
        <ul>
          <li>
            <strong>Préférence cookies :</strong> mémorise votre choix concernant l&apos;acceptation
            ou le refus des cookies (durée : 6 mois)
          </li>
          <li>
            <strong>Session :</strong> maintient votre session de navigation active et le contenu
            de votre panier (durée : session)
          </li>
        </ul>

        <h3>b) Cookies de paiement</h3>
        <p>
          Lors du processus de paiement, notre prestataire <strong>Stripe</strong> peut déposer
          des cookies nécessaires à la sécurisation de la transaction. Ces cookies sont soumis
          à la politique de confidentialité de Stripe :{" "}
          <a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer">
            stripe.com/fr/privacy
          </a>.
        </p>

        <h3>c) Cookies tiers — Widgets</h3>
        <p>
          Le site intègre un widget <strong>Elfsight</strong> pour afficher du contenu externe
          (flux Instagram, avis, etc.). Ce widget peut déposer ses propres cookies. Pour en
          savoir plus :{" "}
          <a href="https://elfsight.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
            elfsight.com/privacy-policy
          </a>.
        </p>

        <h3>d) Cookies analytiques (si applicable)</h3>
        <p>
          Si des outils d&apos;analyse (tels que Google Analytics ou Vercel Analytics) sont mis
          en place, ils permettent de mesurer l&apos;audience du site et d&apos;améliorer son contenu.
          Ces cookies collectent des données de manière anonyme (pages visitées, durée de visite,
          provenance).
        </p>
        <p>
          Ces cookies ne sont déposés qu&apos;avec votre consentement préalable.
        </p>
      </section>

      <section>
        <h2>3. Gestion de vos préférences</h2>
        <p>
          Lors de votre première visite sur le site, un bandeau vous informe de l&apos;utilisation
          des cookies et vous permet d&apos;accepter ou de refuser leur dépôt.
        </p>
        <p>Vous pouvez à tout moment modifier vos préférences :</p>

        <h3>Via votre navigateur</h3>
        <p>
          Chaque navigateur propose des paramètres permettant de gérer les cookies. Voici les
          liens vers les pages d&apos;aide des principaux navigateurs :
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/fr-fr/help/17442" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Attention : la désactivation de certains cookies peut altérer le fonctionnement du site
          et limiter l&apos;accès à certaines fonctionnalités.
        </p>
      </section>

      <section>
        <h2>4. Durée de conservation des cookies</h2>
        <p>Les cookies déposés sur votre terminal ont les durées de vie suivantes :</p>
        <ul>
          <li><strong>Cookies de session :</strong> supprimés à la fermeture du navigateur</li>
          <li><strong>Cookies de préférence (consentement) :</strong> 6 mois maximum</li>
          <li><strong>Cookies analytiques :</strong> 13 mois maximum</li>
          <li><strong>Cookies Stripe :</strong> selon la politique de Stripe</li>
          <li><strong>Cookies Elfsight :</strong> selon la politique d&apos;Elfsight</li>
        </ul>
      </section>

      <section>
        <h2>5. En savoir plus</h2>
        <p>
          Pour en savoir plus sur les cookies et vos droits, vous pouvez consulter le site de
          la CNIL :{" "}
          <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer">
            www.cnil.fr/fr/cookies-et-autres-traceurs
          </a>.
        </p>
        <p>
          Pour toute question relative à notre utilisation des cookies, vous pouvez nous
          contacter à{" "}
          <a href="mailto:contact@bm-custom.com">contact@bm-custom.com</a>.
        </p>
        <p>
          Consultez également notre{" "}
          <Link href="/politique-confidentialite">politique de confidentialité</Link>{" "}
          pour en savoir plus sur le traitement de vos données personnelles.
        </p>
      </section>
    </LegalLayout>
  );
};

export default PolitiqueCookiesPage;
