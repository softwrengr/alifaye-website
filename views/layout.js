module.exports = function layout(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <!-- Header / Top Bar -->
        <header>
          <div class="header-left">
            <img src="/images/logo.png" alt="Logo" class="logo">
          </div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <!-- Deal Banner Section -->
        <section class="banner">
          <span>Super Deal | Big Saving</span>
        </section>
        
        <!-- Main Content -->
        <main>
          ${content}
        </main>

        <!-- Footer -->
        <footer>
          <p>&copy; ${new Date().getFullYear()} Alifaye Supermarket. All rights reserved.</p>
          <p>Email: info@alifayesupermarket.ae | Contact: +971 509811084</p>
        </footer>
      </body>
    </html>
  `;
};
