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
        id: 1,
        slug: '10-proven-tips-keeping-home-spotless',
        title: '10 Proven Tips for Keeping Your Home Spotless',
        description:
          'Learn expert techniques to maintain a clean and organized home without spending all day scrubbing.',
        image: '/Image-(10).png',
        date: 'June 15, 2025',
        author: 'Danielle Harper',
        category: 'Home Cleaning',
        highlight: false,
        content:`10 Proven Tips for Keeping Your Home Spotless
        Keeping your home clean doesn’t have to be overwhelming. With the right habits and a little consistency, you can maintain a sparkling space every day. Here are 10 proven tips to help you stay on top of the mess:
        
        1) Make Your Bed Daily
        Starting your day by making your bed sets a clean tone for the rest of your home.
        
        2) Declutter Often
        The less stuff you have, the less there is to clean. Keep surfaces tidy and get rid of items you no longer need.
        
        3)Clean As You Go
        Wipe down kitchen counters, bathroom sinks, and dining tables right after use to prevent buildup.
        
        4)Set a Cleaning Schedule
        Assign specific tasks to different days of the week so cleaning doesn’t pile up.
        
        5)Keep Cleaning Supplies Handy
        Store cleaning essentials in easy-to-reach areas so you can quickly tackle messes.
        
        6)Do a 15-Minute Daily Sweep
        Spend just 15 minutes picking up, wiping down, and organizing each day — it adds up.
        
        7)Use Doormats
        Place mats at all entrances to catch dirt before it gets inside.
        
        8)Keep Laundry Moving
        Don’t let laundry pile up — do small loads regularly to stay ahead.
        
        9)Tackle One Room at a Time
        Focusing on one area keeps the process manageable and satisfying.
        
        10)Involve the Whole Family
        Share the load! Even small kids can help with simple chores.
        
        By making these tips part of your routine, a spotless home becomes second nature — not a major chore.
        
        `,
      },
      {
        id: 2,
        slug: 'office-cleaning-matters',
        title: 'Office Cleaning: Why It Matters for Productivity',
        description:
          'Explore how a clean office contributes to employee satisfaction, productivity, and client impressions.',
        image: '/Image-(11).png',
        date: 'May 30, 2025',
        author: 'Claire Whitmore',
        category: 'Office Cleaning',
        highlight: true,
        content: `
        <p><strong>1. Boosts Focus and Efficiency</strong><br/>
        Clutter and mess can be mentally distracting. A tidy workspace helps employees concentrate, prioritize tasks, and stay productive throughout the day.</p>
        
        <p><strong>2. Reduces Sick Days</strong><br/>
        Regular disinfection of shared spaces like desks, doorknobs, and kitchens minimizes the spread of germs. Fewer sick employees mean more consistent output.</p>
        
        <p><strong>3. Improves Morale</strong><br/>
        Cleanliness shows employees their health and comfort are valued. A fresh-smelling, neat environment lifts morale and encourages a positive attitude toward work.</p>
        
        <p><strong>4. Enhances Professional Image</strong><br/>
        Clients and visitors form immediate impressions. A spotless office reinforces trust, credibility, and professionalism — essential for any business.</p>
        
        <p><strong>5. Protects Equipment and Investments</strong><br/>
        Dust and grime can affect tech performance and reduce the lifespan of expensive equipment. Routine cleaning prevents unnecessary breakdowns.</p>
        
        <p><em>Whether you're running a startup or managing a corporate space, a clean office is a smart investment in productivity.</em></p>
          `,
      },
      {
        id: 3,
        slug: 'eco-friendly-cleaning',
        title: 'Eco-Friendly Cleaning Products That Actually Work',
        description:
          'Discover our favorite green cleaning products that are safe for your family and the planet.',
        image: '/Image-(12).png',
        date: 'May 10, 2025',
        author: 'Olivia Mensah',
        category: 'Green Cleaning',
        highlight: false,
        content:`<p><strong>1. Vinegar & Baking Soda</strong><br/>
        This classic combo tackles everything from clogged drains to dirty countertops. It’s non-toxic, cheap, and surprisingly powerful.</p>
        
        <p><strong>2. Castile Soap</strong><br/>
        A plant-based liquid soap that can be used to clean dishes, floors, and even your body. Dilute it for different uses around your home.</p>
        
        <p><strong>3. Microfiber Cloths</strong><br/>
        These reusable cloths trap dust and bacteria without chemicals. Just add water and start wiping!</p>
        
        <p><strong>4. Seventh Generation All-Purpose Cleaner</strong><br/>
        A trusted eco-brand, their plant-based formulas cut through grease and grime with zero synthetic fragrances or dyes.</p>
        
        <p><strong>5. Method Bathroom Cleaner</strong><br/>
        Tough on soap scum but made from biodegradable ingredients, it leaves your bathroom fresh and guilt-free.</p>
        
        <p><em>Going green doesn’t mean sacrificing clean. These eco-products deliver results — while keeping your home and planet healthy.</em></p>
        `
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
