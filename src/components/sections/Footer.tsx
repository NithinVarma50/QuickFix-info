const Footer = () => {
  return (
    <footer className="border-t border-border bg-transparent py-16">
      <div className="content-container">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">QuickFix</h3>
            <p className="body-md text-sm">
              AI-powered vehicle repair,<br />delivered to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="label-sm mb-4 text-foreground">Company</p>
            <ul className="space-y-3">
              {["About", "How It Works", "Technology", "Franchise"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-sm mb-4 text-foreground">Contact</p>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">hello@quickfix.in</li>
              <li><a href="tel:+917337243180" className="text-sm text-muted-foreground transition-colors hover:text-foreground">+91 73372 43180</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="label-sm mb-4 text-foreground">Social</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_quicfix.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                IG
              </a>
            </div>
          </div>
        </div>

        <div className="divider-subtle mt-12 mb-8" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} QuickFix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
