'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleCheckout = (plan: string) => {
    setSelectedPlan(plan);
    // Mock checkout - will be replaced with Stripe
    alert(`🚧 Checkout coming soon!\n\nYou selected: ${plan}\n\nWe're setting up payments. Leave your email and we'll notify you when it's ready!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              🚀 LaunchAgent
            </div>
            <a 
              href="https://github.com/AvalanL/launchagent" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              GitHub →
            </a>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
            🍎 AI-Powered iOS App Launch System
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Your AI Marketing Team
            <br />
            <span className="text-blue-400">for iOS App Store Launches</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Open in Cursor. Talk to the agent. Launch your iOS app to thousands of users.
            <br />
            ASO, App Store Connect, marketing content — all automated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition transform hover:scale-105"
            >
              Get LaunchAgent →
            </a>
            <a 
              href="https://github.com/AvalanL/launchagent" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold text-lg transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Building iOS apps is solved. <span className="text-red-400">App Store launches aren't.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">😫</div>
              <h3 className="text-xl font-semibold mb-2">The Day 2 Problem</h3>
              <p className="text-gray-400">
                You built an amazing iOS app. Now what? App Store marketing is a whole other skillset.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold mb-2">Agencies Are Expensive</h3>
              <p className="text-gray-400">
                Marketing agencies charge $5,000-10,000/month. That's not indie-friendly.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-2">No Time to Learn</h3>
              <p className="text-gray-400">
                ASO, content marketing, PR, social... there's too much to figure out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            What if App Store launch was also solved?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            LaunchAgent is a complete AI marketing team for iOS apps. Open it, talk to it, launch on the App Store.
          </p>
          
          <div className="bg-gray-800/30 rounded-2xl border border-gray-700 p-8 max-w-4xl mx-auto">
            <div className="font-mono text-sm">
              <div className="text-gray-500 mb-2"># Clone and open in Cursor</div>
              <div className="text-green-400 mb-4">$ cursor launchagent/</div>
              
              <div className="text-gray-500 mb-2"># Start chatting</div>
              <div className="text-blue-400 mb-1">You: Hi, I want to launch my app</div>
              <div className="text-purple-400 mb-1">Agent: Great! Tell me about your app...</div>
              <div className="text-blue-400 mb-1">You: It's called PinNote, an AI note-taking iOS app</div>
              <div className="text-purple-400 mb-4">Agent: Got it! I'll analyze your App Store competitors, optimize your iOS listing, create launch content, and push to App Store Connect. Say "start research" when ready.</div>
              
              <div className="text-gray-500 mb-2"># The agent does the work</div>
              <div className="text-blue-400 mb-1">You: start research</div>
              <div className="text-purple-400">Agent: 🔍 Analyzing 5 competitors... Found 3 positioning gaps. Ready to generate your ASO metadata?</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Complete iOS Launch Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔍', title: 'Research Agent', desc: 'App Store competitor analysis & market gaps' },
              { icon: '📱', title: 'ASO Agent', desc: 'iOS keywords, titles, descriptions that rank' },
              { icon: '🎨', title: 'Icon Generator', desc: 'All iOS icon sizes (1024px → all sizes)' },
              { icon: '✍️', title: 'Content Agent', desc: 'Twitter, Reddit, PH, HN posts ready to go' },
              { icon: '📣', title: 'Distribution', desc: 'Launch day content across all channels' },
              { icon: '🍎', title: 'Fastlane Integration', desc: 'Push metadata to App Store Connect' },
              { icon: '💬', title: 'Review Agent', desc: 'Monitor & respond to App Store reviews' },
              { icon: '📊', title: 'Analytics', desc: 'Track downloads & rankings' },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            From zero to launched in days
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Clone & Open', desc: 'Open in Cursor or any AGENTS.md-compatible IDE' },
              { step: '2', title: 'Chat Setup', desc: 'Answer 5 questions about your iOS app' },
              { step: '3', title: 'Agent Executes', desc: 'App Store research, ASO, content — all generated' },
              { step: '4', title: 'Push & Launch', desc: 'Fastlane syncs to App Store Connect, go live' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Simple, one-time pricing
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Pay once, launch unlimited apps. No subscriptions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-6">$79</div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  All agent system prompts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  7 specialized skills
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Fastlane integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Icon generation script
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Knowledge base files
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Email support
                </li>
              </ul>
              <button 
                onClick={() => handleCheckout('Starter - $79')}
                className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
              >
                Get Starter
              </button>
            </div>

            {/* Pro */}
            <div className="p-8 bg-gradient-to-b from-blue-900/50 to-gray-800/50 rounded-2xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">$149</div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Everything in Starter
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Video walkthroughs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Platform-specific guides
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Discord community access
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  1 year of updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Priority support
                </li>
              </ul>
              <button 
                onClick={() => handleCheckout('Pro - $149')}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Get Pro
              </button>
            </div>

            {/* Complete */}
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Complete</h3>
              <div className="text-4xl font-bold mb-6">$299</div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Everything in Pro
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  1-hour setup call
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Launch review session
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Lifetime updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  White-glove support
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Early access to new features
                </li>
              </ul>
              <button 
                onClick={() => handleCheckout('Complete - $299')}
                className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
              >
                Get Complete
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why LaunchAgent?
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-4 text-center text-sm text-gray-400">
              <div></div>
              <div>Them</div>
              <div className="text-blue-400">LaunchAgent</div>
            </div>
            
            {[
              { label: 'ASO Tools', them: '$50-200/mo', us: '$79 once' },
              { label: 'Marketing Agency', them: '$5,000+/mo', us: '$79 once' },
              { label: 'Marketing Courses', them: '$200-500', us: 'Included' },
              { label: 'Execution', them: 'You do it', us: 'Agent does it' },
              { label: 'Time to learn', them: 'Weeks', us: 'Minutes' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800">
                <div className="font-medium">{row.label}</div>
                <div className="text-center text-gray-400">{row.them}</div>
                <div className="text-center text-green-400">{row.us}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions?
          </h2>
          
          <div className="space-y-6">
            {[
              { 
                q: 'What do I need to use LaunchAgent?', 
                a: 'Cursor (or any AGENTS.md-compatible IDE), Fastlane (for App Store), and ImageMagick (for icons). All free tools.' 
              },
              { 
                q: 'Does it work for Android?', 
                a: 'Currently focused on iOS/App Store. Android support coming soon based on demand.' 
              },
              { 
                q: 'What if I don\'t know ASO or marketing?', 
                a: 'That\'s the point! The agent knows it for you. Just talk to it naturally and follow its guidance.' 
              },
              { 
                q: 'Can I use this for multiple apps?', 
                a: 'Yes! One purchase, unlimited apps. Use it for every app you launch.' 
              },
              { 
                q: 'What model does it use?', 
                a: 'Works with Claude (via Cursor) or any AGENTS.md-compatible model. Uses your existing AI subscription.' 
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to launch your app?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Stop struggling with marketing. Let your AI team handle it.
          </p>
          <a 
            href="#pricing" 
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition transform hover:scale-105"
          >
            Get LaunchAgent →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2026 LaunchAgent. Built with 🌙 by{' '}
              <a href="https://twitter.com/benwarb" className="text-white hover:underline">Ben</a>
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="https://github.com/AvalanL/launchagent" className="hover:text-white transition">GitHub</a>
              <a href="https://twitter.com/benwarb" className="hover:text-white transition">Twitter</a>
              <a href="mailto:hello@launchagent.dev" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
