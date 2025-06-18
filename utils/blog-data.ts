import mongoose from 'mongoose';
import { Blog } from '../models/Blog'; // Adjust path if needed
import dotenv from 'dotenv';


dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL as string;

async function allBlogs() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Blog.deleteMany({});

    // Sample blog data
    await Blog.insertMany([
      {
        slug: 'eco-friendly-cleaning',
        title: 'Eco-Friendly Cleaning: How We Keep Your Home Green',
        date: 'JUNE 6, 2025',
        author: 'LISA NOON',
        excerpt:
          'Learn about our commitment to eco-friendly practices. We share the eco-conscious products any other services...',
        content: `At ProCleaning, we believe that a clean home shouldn’t come at the cost of a dirty planet. That’s why eco-friendly cleaning is at the heart of everything we do. From the products we use to the techniques we follow, every choice is made with your health — and the Earth — in mind.

        🌱 Non-Toxic Products:
        We use biodegradable, plant-based cleaners that are tough on dirt but gentle on surfaces, pets, and kids. No harsh chemicals, no strong fumes — just freshness you can feel good about.
        
        ♻️ Sustainable Tools:
        Reusable microfiber cloths, compostable sponges, and water-efficient practices help us minimize waste and conserve resources during every visit.
        
        🌍 A Greener Future Starts at Home:
        By choosing green cleaning, you’re not only protecting your household from harmful chemicals — you're also supporting a healthier planet for future generations.
        
        Looking for a sparkling clean home that’s also eco-conscious? Let us do the dirty work, the green way. 🌿✨`,
        img: '/image (10).png',
        highlight: false,
      },
      {
        slug: 'clean-home-between-visits',
        title: 'How to Maintain a Clean Home Between Professional Visits',
        date: 'APRIL 12, 2025',
        author: 'JOHN HELTON',
        excerpt:
          'Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...',
        content: `Keeping your home clean between professional cleaning appointments doesn’t have to be overwhelming. With a few smart habits and simple routines, you can enjoy a tidy space every day.

        1. Focus on Daily Hotspots
        Tackle high-traffic areas like the kitchen and bathroom daily. Wipe down countertops, do a quick sweep or vacuum, and handle any spills right away. This prevents dirt from piling up.
        
        2. Make Your Bed Every Morning
        It only takes a minute but makes a huge difference in how clean and put-together your space feels. It also sets the tone for a productive day.
        
        3. Do a 10-Minute Tidy
        Set a timer and tidy up common areas each evening — put things back where they belong, fluff pillows, and throw out any trash. Involve your family or roommates for quick results.
        
        4. Clean as You Go
        Whether you’re cooking or getting ready in the morning, clean up after each task. This avoids large messes and makes cleaning feel effortless.
        
        5. Keep Cleaning Supplies Handy
        Store basic supplies (like disinfectant wipes, microfiber cloths, and a handheld vacuum) in strategic places so you can clean up small messes immediately.
        
        By adding these small habits to your routine, you’ll find that your home stays fresh and organized between your professional cleanings. A little effort each day goes a long way! 🌿
        `,
        img: '/image (11).png',
        highlight: true,
      },
      {
        slug: 'benefits-of-regular-cleaning',
        title: 'The Benefits of Regular Professional Cleaning',
        date: 'FEB 6, 2025',
        author: 'JOHN HELTON',
        excerpt:
          'Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...',
        content: `Maintaining a clean home or workspace isn’t just about appearances — it’s about health, peace of mind, and long-term savings. Here’s why scheduling regular professional cleaning is a smart decision:
          
        1. A Healthier Environment
        Professional cleaners remove dust, allergens, bacteria, and mold that often go unnoticed. This leads to improved indoor air quality and reduces the risk of illness — especially important for families with kids, pets, or allergy sufferers.
        
        2. Consistent Cleanliness
        Life gets busy. Regular visits from professional cleaners ensure your space stays consistently clean, even during your most hectic weeks.
        
        3. Time and Energy Saved
        Why spend your weekends scrubbing when you could be relaxing or spending time with loved ones? Hiring a pro gives you back your most valuable asset: time.
        
        4. Longer-Lasting Surfaces
        Dust and grime can wear down surfaces over time. Regular cleaning helps preserve furniture, flooring, and fixtures — saving you money on repairs or replacements in the long run.
        
        5. A Mental Refresh
        A clean space reduces stress, boosts focus, and promotes a sense of calm. Coming home to a professionally cleaned environment simply feels better.
        
        Final Thought:
        Investing in regular professional cleaning isn’t just about cleanliness — it’s about creating a healthier, happier lifestyle.`,
        img: '/image (12).png',
        highlight: false,
      },
    ]);

    console.log('Seeded blog posts successfully ✅');
    mongoose.disconnect();
  } catch (error) {
    console.error('Seeding failed ❌', error);
    mongoose.disconnect();
  }
}

allBlogs();
