import { Icon } from './Icon';
import BrandWordmark from './BrandWordmark';

export default function Footer() {
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/company/143979740/';

  return (
    <footer className="bg-navy border-t border-white/5 pt-16 pb-8 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-2">
              <BrandWordmark inverse />
            </div>
            <div className="mb-3">
              <span className="text-xs tracking-[0.2em] uppercase text-slate-500">Technology</span>
            </div>
            <p className="text-sm text-slate-400 mt-3">Technology Origin</p>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://taxoryn.com" target="_blank" rel="noreferrer" className="text-sm text-slate-300 hover:text-white transition">Taxoryn <span aria-hidden="true">↗</span></a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm text-slate-400">Eduoryn</span>
                <span className="text-[10px] uppercase tracking-wider bg-white/10 text-slate-300 px-1.5 py-0.5 rounded font-medium">Soon</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm text-slate-400">Servoryn</span>
                <span className="text-[10px] uppercase tracking-wider bg-white/10 text-slate-300 px-1.5 py-0.5 rounded font-medium">Soon</span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Solutions */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#solutions" className="text-sm text-slate-300 hover:text-white transition">Custom Software</a></li>
              <li><a href="#solutions" className="text-sm text-slate-300 hover:text-white transition">Digital Transformation</a></li>
              <li><a href="#solutions" className="text-sm text-slate-300 hover:text-white transition">System Integration</a></li>
              <li><a href="#technology" className="text-sm text-slate-300 hover:text-white transition">Technology Consulting</a></li>
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">Company</h3>
            <ul className="space-y-3 mb-8">
              <li><a href="#about" className="text-sm text-slate-300 hover:text-white transition">About</a></li>
              <li><a href="#careers" className="text-sm text-slate-300 hover:text-white transition">Careers</a></li>
              <li><a href="#contact" className="text-sm text-slate-300 hover:text-white transition">Contact</a></li>
            </ul>
            
            <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm text-slate-300 hover:text-white transition"
                aria-label="Connect with ORYN Technology on LinkedIn"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 group-hover:border-[#0A66C2]/50 group-hover:bg-[#0A66C2]/15 group-hover:text-[#7DB8F0] transition">
                  <Icon name="linkedin" className="w-4 h-4" />
                </span>
                <span>Connect on LinkedIn <span aria-hidden="true" className="text-xs">↗</span></span>
              </a>
              <a
                href="mailto:hello@oryntech.in?subject=Hello%20Oryn"
                className="group inline-flex items-center gap-3 text-sm text-slate-300 hover:text-white transition"
                aria-label="Email Oryn"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 group-hover:bg-white/10 transition">
                  <Icon name="mail" className="w-4 h-4" />
                </span>
                <span>Email Oryn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <p className="text-xs text-slate-500 text-center">
            &copy; {new Date().getFullYear()} Oryn Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
