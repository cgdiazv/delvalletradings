import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-700 font-sans selection:bg-amber-100">
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        
        {/* Logo Section */}
        <div className="mb-12">
          <Image 
            src="/logo-devalle.webp" 
            alt="Del Valle Tradings LLC Logo" 
            width={350} 
            height={200} 
            priority
            className="h-auto w-auto"
          />
        </div>

        {/* Company Intro */}
        <section className="space-y-6 leading-relaxed">
          <p>
            <strong>Del Valle Tradings LLC</strong> is a dynamic parent company dedicated to managing and growing a diverse 
            range of businesses. Headquartered in Houston, Texas, Del Valle Tradings LLC provides strategic 
            leadership and operational support to ensure the success of its subsidiaries.
          </p>
          
          <p>Our portfolio includes:</p>

          {/* Subsidiaries */}
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-tight">
                <a href="https://indevasa.com" className="text-[#9a7949] hover:opacity-80 transition-opacity">
                  Indeva Websites
                </a>
              </h2>
              <p className="mt-2 text-[#444444]">
                A creative web design and development company specializing in delivering simple, modern, and 
                effective website solutions for businesses of all sizes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-tight">
                <a href="#" className="text-[#9a7949] hover:opacity-80 transition-opacity">
                  Lácteos Del Valle
                </a>
              </h2>
              <p className="mt-2 text-[#444444]">
                A specialty dairy manufacturing brand offering authentic Central American flavors through high-quality, 
                handcrafted dairy products.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase tracking-tight">
                <a href="#" className="text-[#9a7949] hover:opacity-80 transition-opacity">
                  DDV Consulting
                </a>
              </h2>
              <p className="mt-2 text-[#444444]">
                A professional management consulting firm that provides customized solutions to optimize 
                operations, improve efficiency, and drive growth for businesses across various industries.
              </p>
            </div>
          </div>

          <p className="pt-4">
            At Del Valle Tradings LLC, our mission is to foster innovation, maintain the highest quality standards, 
            and deliver exceptional value to our clients and communities. Through our diverse ventures, we 
            continue to build a legacy of excellence and trust.
          </p>
        </section>

        {/* Footer / Contact */}
        <footer className="mt-20 pt-8 border-t border-gray-100 w-full space-y-2 text-sm text-gray-500">
          <p className="font-bold text-gray-800">Del Valle Tradings LLC</p>
          <address className="not-italic">
            12828 Willow Centre Dr Ste D<br />
            Houston, TX 77066, US
          </address>
          <p>(209) 286-6546</p>
        </footer>
      </div>
    </main>
  );
}