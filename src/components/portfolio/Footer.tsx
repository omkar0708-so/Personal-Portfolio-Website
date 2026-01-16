const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Omkar R Thakur. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion for data-driven insights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
