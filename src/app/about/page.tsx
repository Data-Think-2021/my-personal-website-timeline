import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="pt-32 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">My Story</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-6">
              Hey there! I&apos;m Xia, a curious, open-minded, slightly risk-loving human who believes in working hard, learning constantly, and experimenting new things.
            </p>
            <p className="mb-6">
              I live with my family in Kleinmachnow, which is located the southwest of Berlin. I&apos;m a mom to two kids, one samojede dog, and two cats. Life isn&apos;t a straight line upward for me—it bounces up and down. But I&apos;ve come a long way—from a farming family in rural China, to studying in Italy, France, and now Germany.—and I know I&apos;ve been both lucky and prepared when opportunity knocked. 🍀
            </p>
            <h2 className="text-2xl font-semibold mt-12 mb-4">Hobbies? Kind of!</h2>
            <p className="mb-6">
              A few years ago, my hobbies were mostly just &quot;trying to sit down in my own garden for a tea,&quot; but I&apos;ve managed to sneak in: Gardening (a.k.a. outdoor therapy), Sewing clothes for my kids and now even for myself, Yoga 🧘‍♀️, dog walking, and building my website and ios app.
            </p>
            <h2 className="text-2xl font-semibold mt-12 mb-4">Cool Things I Did Recently</h2>
            <p className="mb-4">
              Last year, I initiated two community-driven projects that made me feel all warm inside:
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <strong>The Working Mom Project</strong> – a support initiative for moms preparing to return to the workforce.
              </li>
              <li>
                <strong>Asian Cooking Classes</strong> – something I organized for my German neighbors to share culture and food.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold mt-12 mb-4">What&apos;s Next? 🚀</h2>
            <p className="mb-6">
              This year, I&apos;m trying something new: <strong>Freelancing Fridays!</strong> I&apos;m dipping my toes into freelance work with a mission to help and empower women, moms, and people with migration background to chase their careers and financial independence. 💪✨ Independence is extremely important to me when I overcome my midlife crisis recently.
            </p>
            <p className="mb-6">
              If that sounds like you—or someone you know—I&apos;m always happy to chat, share, or cheer you on.
            </p>
          </div>
          {/* Book a Call Section */}
          <div className="mt-12 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Ready to Be A Better You?</h3>
            <p className="mb-4">
              Whether you&apos;re just starting in tech or looking to advance your career, I&apos;m here to help you succeed.
            </p>
            <a
              href="/book-call"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 