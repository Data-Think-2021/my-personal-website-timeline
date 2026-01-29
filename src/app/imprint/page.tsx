import React from 'react';

export default function ImprintPage() {
    return (
        <div className="min-h-screen pt-32 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    Imprint (Impressum)
                </h1>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                            <p>
                                <strong>Xia He-Bleinagel</strong><br />
                                Wendemarken 5<br />
                                14532 Kleinmachnow<br />
                                Germany
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                        <p>
                            Email: info@datathinker.de<br />
                            Phone: 0176 55504821
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p>
                            Xia He-Bleinagel<br />

                        </p>
                    </section>

                    <section className="mb-8 border-t border-gray-800 pt-8 mt-8">
                        <h3 className="text-xl font-bold text-white mb-4">Haftung für Inhalte</h3>
                        <p className="text-sm">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
