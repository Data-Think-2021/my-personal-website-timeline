import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-32 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    Datenschutzerklärung
                </h1>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Verantwortlicher</h2>
                        <p>
                            Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:
                            <br />
                            <br />
                            Xia He-Bleinagel
                            <br />
                            Wendemarken 5
                            <br />
                            14532 Kleinmachnow
                            <br />
                            <br />
                            info@datathinker.de
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Allgemeine Hinweise</h2>
                        <p>
                            Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Ich verarbeite personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzgesetze, insbesondere der Datenschutz-Grundverordnung (DSGVO).
                        </p>
                        <p className="mt-4">
                            Mit dieser Datenschutzerklärung informiere ich Sie darüber, welche Daten beim Besuch dieser Website und bei der Nutzung einzelner Funktionen verarbeitet werden.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Hosting</h2>
                        <p>
                            Diese Website wird bei Amazon Web Services, Inc. (AWS) gehostet.
                        </p>
                        <p className="mt-4">
                            Beim Besuch der Website werden durch AWS automatisch technische Daten verarbeitet, die für den sicheren Betrieb erforderlich sind, insbesondere:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>IP-Adresse</li>
                            <li>Datum und Uhrzeit des Zugriffs</li>
                            <li>aufgerufene Seiten bzw. Dateien</li>
                            <li>Browsertyp und -version</li>
                            <li>Betriebssystem</li>
                            <li>Referrer-URL</li>
                        </ul>
                        <p className="mt-4">
                            Diese Daten werden ausschließlich zu folgenden Zwecken verarbeitet:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>technische Bereitstellung der Website</li>
                            <li>Gewährleistung von Sicherheit und Stabilität</li>
                            <li>Fehleranalyse</li>
                        </ul>
                        <p className="mt-4">
                            <strong>Rechtsgrundlage:</strong><br />
                            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und zuverlässigen Betrieb der Website)
                        </p>
                        <p className="mt-4">
                            Die Daten werden nur so lange gespeichert, wie dies aus technischen oder sicherheitsrelevanten Gründen erforderlich ist.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Kontaktformular (Formspree)</h2>
                        <p>
                            Für die Kontaktaufnahme steht ein Kontaktformular zur Verfügung, das über den Dienst Formspree bereitgestellt wird.
                        </p>
                        <p className="mt-4">
                            Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Nachricht) an die Server von Formspree übermittelt und dort verarbeitet, um Ihre Anfrage an mich weiterzuleiten.
                        </p>
                        <p className="mt-4">
                            Formspree verarbeitet die Daten ausschließlich zur Bereitstellung des Formularservices und verwendet keine Cookies auf dieser Website.
                        </p>
                        <p className="mt-4">
                            <strong>Rechtsgrundlage:</strong><br />
                            Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung Ihrer Anfrage)
                            <br />
                            oder
                            <br />
                            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Kommunikation)
                        </p>
                        <p className="mt-4">
                            Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten bestehen.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Waitlist & E-Mail-Kommunikation (Resend)</h2>
                        <p>
                            Wenn Sie sich über diese Website für eine Warteliste (Waitlist) anmelden, wird Ihre E-Mail-Adresse verarbeitet, um Sie über den jeweiligen Stand oder zukünftige Informationen zu informieren.
                        </p>
                        <p className="mt-4">
                            Der Versand der E-Mails erfolgt über den Dienst Resend. Resend wird ausschließlich serverseitig eingesetzt und setzt keine Cookies auf Ihrem Endgerät.
                        </p>
                        <p className="mt-4">
                            Die E-Mail-Adresse wird nur für den angegebenen Zweck verwendet und nicht an unbeteiligte Dritte weitergegeben.
                        </p>
                        <p className="mt-4">
                            <strong>Rechtsgrundlage:</strong><br />
                            Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                        </p>
                        <p className="mt-4">
                            Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie mir eine entsprechende Nachricht senden oder den in der E-Mail enthaltenen Abmelde-Link nutzen.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
                        <p>
                            Diese Website verwendet keine Cookies.
                        </p>
                        <p className="mt-4">
                            Es findet:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>kein Tracking</li>
                            <li>keine Analyse des Nutzerverhaltens</li>
                            <li>keine Profilbildung</li>
                        </ul>
                        <p className="mt-4">
                            statt.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Weitergabe von Daten</h2>
                        <p>
                            Eine Weitergabe personenbezogener Daten erfolgt nur, soweit dies technisch erforderlich ist (Hosting, Formular- und E-Mail-Dienste) oder gesetzlich vorgeschrieben ist.
                        </p>
                        <p className="mt-4">
                            Eine darüber hinausgehende Weitergabe findet nicht statt.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Ihre Rechte</h2>
                        <p>
                            Sie haben nach der DSGVO insbesondere folgende Rechte:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                        </ul>
                        <p className="mt-4">
                            Zudem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Datenschutzbeauftragter</h2>
                        <p>
                            Ein Datenschutzbeauftragter ist nicht bestellt, da hierfür keine gesetzliche Verpflichtung besteht.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Datensicherheit</h2>
                        <p>
                            Es werden geeignete technische und organisatorische Maßnahmen eingesetzt, um personenbezogene Daten vor unbefugtem Zugriff, Verlust oder Manipulation zu schützen.
                        </p>
                        <p className="mt-4">
                            Die Datenübertragung erfolgt verschlüsselt (SSL/TLS).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">11. Stand der Datenschutzerklärung</h2>
                        <p>
                            Stand: Januar 2026
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
