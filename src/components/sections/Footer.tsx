const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="content-container">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">FIXD</h3>
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
              <li className="text-sm text-muted-foreground">hello@fixd.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 000-0000</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="label-sm mb-4 text-foreground">Social</p>
            <div className="flex gap-4">
              {["X", "IG", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-subtle mt-12 mb-8" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} FIXD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
