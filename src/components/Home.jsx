import React from "react";
import AccordionSection from "./AccordionSection";

export const menuData = {
  Manakish: [
    { name: "Zaatar", price: "100,000", ar: "زعتر" },
    { name: "Zaatar & khodra", price: "150,000", ar: "زعتر وخضرة" },
    { name: "Kishk", price: "150,000", ar: "كشك" },
    { name: "Cheese", price: "250,000", ar: "جبنة" },
    { name: "Cheese & Kishk", price: "200,000", ar: "جبنة وكشك" },
    { name: "Cheese & Zaatar", price: "200,000", ar: "جبنة وزعتر" },
    { name: "Labneh", price: "250,000", ar: "لبنة" },
    { name: "Qawarma", price: "300,000", ar: "قاورما" },
    { name: "Cheese & Jombon", price: "400,000", ar: "جبنة وجونبون" },
    { name: "Sujuk", price: "400,000", ar: "سجق" },
    { name: "Cheese & Sujuk", price: "400,000", ar: "جبنة وسجق" },
    { name: "Fahita", price: "450,000", ar: "فاهيتا" },
  ],
  Dessert: [
    { name: "Nutella Crepe", price: "500,000", ar: " نيوتيلا كريب " },
    { name: "Fettuccini Crepe", price: "500,000", ar: "فيتوتشيني كريب" },
    { name: "Waffle", price: "450,000", ar: "وافل" },
    { name: "Pancake", price: "720,000", ar: "بانكيك" },
    { name: "Donuts", price: "360,000", ar: "دونات" },
    { name: " .... + Lotus", price: "100,000", ar: "+ لوتس"},
    { name: " .... + Kinder", price: "100,000", ar: "+ كندر"},
    { name: " .... + Pistachio", price: "300,000", ar: "+ فستق"},

  ],
  "Cold Drinks": [
    { name: "Water", price: "25,000", ar: "ماء" },
    { name: "Juice", price: "50,000", ar: "عصير" },
    { name: "Maccaw", price: "50,000", ar: "ماكاو" },
    { name: "Milk shake", price: "60,000", ar: "ميلك شيك" },
    { name: "Soft Drinks", price: "80,000", ar: "مشروبات غازية" },
    { name: "Dark Blue", price: "60,000", ar: "دارك بلو" },
    { name: "Laban", price: "60,000", ar: "لبن" },
    { name: "Ice Coffee", price: "75,000", ar: "قهوة مثلجة" },
    { name: "Maestro", price: "50,000", ar: "مايسترو"}
  ],
  "Hot Drinks": [
    { name: "Tea", price: "50,000", ar: "شاي" },
    { name: "Coffee", price: "50,000", ar: "قهوة" },
    { name: "Cappuccino", price: "50,000", ar: "كابوتشينو" },
    { name: "Nescafe", price: "50,000", ar: "نسكافيه" },
    { name: "Sahlab", price: "200,000", ar: "سحلب" },
  ],
  "Kaaki": [
    { name: "Kaaki Picon", price: "250,000", ar: "كعكة بيكون" },
    { name: "Kaaki Traboulsiye", price: "300,000", ar: "كعكة طرابلسية" },
    { name: "Kaaki Cheese & Jombon", price: "250,000", ar: "كعكة جبنة و جونبون" },
    
  ]
};

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* 1. FIXED BACKGROUND LAYER */}
      <div
        className="fixed inset-0 z-0 bg-[length:80%] bg-no-repeat bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url('/images/background2.jpeg')` }} // Removed 'public'
      ></div>

      {/* 2. CONTENT LAYER (Uses z-10 to stay above background) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="bg-red-900 text-white p-8 text-center shadow-lg">
          <h1 className="text-4xl font-serif tracking-widest">BAYTOUTI</h1>
          <p className="mt-2 opacity-80 uppercase text-sm tracking-widest">
            Traditional Homemade Food
          </p>
        </header>

        <main className="max-w-2xl mx-auto mt-4 px-4 w-full pb-24">
          {" "}
          {/* Added padding-bottom so footer doesn't hide items */}
          <AccordionSection
            title="Manakish"
            arabicTitle="مناقيش"
            items={menuData.Manakish}
          />

          <AccordionSection
            title="Kaaki"
            arabicTitle="كعكة"
            items={menuData.Kaaki}
          
          />

          <AccordionSection
            title="Dessert"
            arabicTitle="حلويات"
            items={menuData.Dessert}
          />

          <AccordionSection
            title="Cold Drinks"
            arabicTitle="مشروبات باردة"
            items={menuData["Cold Drinks"]}
          
          />

          <AccordionSection
            title="Hot Drinks"
            arabicTitle="مشروبات ساخنة"
            items={menuData["Hot Drinks"]}
          
          />

          
        </main>

        <footer className="fixed text-white bottom-0 w-full bg-red-900 p-4 text-center font-bold shadow-lg">
          <a className="hover:underline flex  gap-6">
            <span>Delivery:</span>
            <span> 70/563409</span>
            <span>70/358759</span>
          </a>
          <a>
            <span>الجديدة - الطريق العام</span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
