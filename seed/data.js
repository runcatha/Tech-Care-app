import db from '../db/connection.js'
import Laptop from '../models/laptop.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    username: 'cathleen',
    email: 'carunde8@gmail.com',
    password_digest: await bcrypt.hash('cathleen!', 11)
  })
  await user1.save()

  const user2 = new User({
    username: 'esther',
    email: 'estherryu77@gmail.com',
    password_digest: await bcrypt.hash('esther!', 11)
  })
  await user2.save()

  const user3 = new User({
    username: 'adanne',
    email: 'audumah94@gmail.com',
    password_digest: await bcrypt.hash('adanne!', 11)
  })
  await user3.save()

  const user4 = new User({
    username: 'theo',
    email: '456theochang@gmail.com',
    password_digest: await bcrypt.hash('theo!', 11)
  })
  await user4.save()
  const laptops =
    [
      {
        image_url: "https://i.imgur.com/RTEHReW.jpg",
        name: 'Dell XPS 15 (2020)',
        price: '1059.99',
        description: `The Dell XPS 15 (2020) is in our view the best laptop for programming right now. As with previous XPS laptops, this 15-inch beauty combines a stunning design, excellent build quality and some of the most powerful mobile components you'll find in a laptop.
    It's thin and light, which not only means this looks and feels like a premium laptop for programming on, but it's also comfortable to carry around with you as well. It's high resolution 15.6-inch display is great for working on, and with high-end processors (and even graphics cards in some configurations), the Dell XPS 15 can compile code incredibly fast – making it ideal for programmers. Plus, if you go for a model with a GPU by Nvidia, you can test out your games while coding them.
    Perhaps best of all, its battery life is excellent, which means you don't have to be tethered to a desk if you want to use this powerful laptop.`,
        processor: '10th Generation Intel® Core™ i5-',
        memory: '8GB DDR4-2933MHz, 2x4G',
        hardrive: '256GB M.2 PCIe NVMe Solid State Drive',
        buy_link: 'https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9500-laptop/x[…]GjFaucVfgQUr06nphJ_ijZkI47YKDrA8taGlDRZAxdbxtoafQxtlTp3zfL1l_8'
      },
      {
        image_url: "https://i.imgur.com/mWUv1nn.jpg",
        name: 'Apple MacBook Air (M1, 2020)',
        price: '1249.00',
        description: `-- Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power. ---`,
        processor: 'Apple M1 Chip',
        memory: '8 GB Ram - 3733MHz LPDDR4X',
        hardrive: '512 GB memory',
        buy_link: 'https://www.amazon.com/Apple-MacBook-13-inch-512GB-Storage/dp/B08N5M9XBS/ref=sr_1_1_[…]fYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
      },
      {
        image_url: "https://i.imgur.com/EpltLRK.jpg",
        name: 'LG Gram 17 (2021)',
        price: '1689.00',
        description: `If you're after a large-screen laptop to do your coding on, then the LG Gram 17 (2021) is the perfect choice. It has a gorgeous screen that's high resolution and large, giving you plenty of workspace. However, this is a laptop that proves you don't have to sacrifice portability and comfort for screen size, as it's impressively light. This means you can comfortably carry it around with you – perfect for anyone who travels a lot.

        It's also got one of the best battery lives we've seen in a Windows 10 laptop, mainly thanks to the new Intel 11th generation hardware that's powering this new laptop for 2021. So, you can work anywhere you like, safe in the knowledge that the battery will easily last you a whole work day – and longer.`,
        processor: 'i7-1165G7 (2.8GHz, Turbo up to 4.7GHz, L3 Cache 12MB)',
        memory: '16GB LPDDR4X 4266MHz, -16GB (On Board)',
        hardrive: 'M.2 2280 SSD (Solid State Drive)',
        buy_link: 'https://www.amazon.com/dp/B08SW1LTST?tag=georiot-us-default-20&th=1&psc=1&ascsubtag=cbq-us-5763924590665683000-20&geniuslink=true'
      },
      {
        image_url: "https://i.imgur.com/DsBoc9P.jpg",
        name: 'Huawei MateBook 13',
        price: '926.99',
        description: `The Huawei MateBook 13 is one of the best laptops for programming, especially for coders on a budget. Huawei is perhaps best known for its excellent smartphones, which won over critics by offering the kind of features and build quality you'd expect from more expensive competitors, and it's done the same with its laptops.

        For a (relatively) modest asking price, you’re getting all the power of a Core i5 or Core i7, a crisp, bright, high-resolution 13-inch display, and loads of SSD storage.
        
        If you've been eyeing up Apple and Dell laptops in this roundup, but find them too expensive, then the MateBook 13 is a fantastic alternative.
        
        What’s more, it’s super portable too, weighing just 1.3kg and less than 1.5cm thick.`,
        processor: '10th Gen Intel® Core™ i7-10510U',
        memory: '8GB / 16GB LPDDR3 2133 MHz',
        hardrive: '512GB PCIe SSD',
        buy_link: 'https://www.amazon.com/Huawei-Matebook-Signature-Edn-Laptop/dp/B07MK3SP9R/ref=sr_1_3?tag=georiot-us-default-20&dchild=1&keywords=Huawei%20MateBook%2013%20Laptop&qid=1600159382&sr=8-3&ascsubtag=cbq-us-7632278232388296000-20&geniuslink=true'
      },
      {
        image_url: "https://i.imgur.com/snpFfkJ.jpg",
        name: 'MacBook Pro 13-inch (M1, 2020)',
        price: '1199.00',
        description: `The latest MacBook Pro from Apple is a brilliant laptop for programming on. It features Apple's own M1 chip, like the new MacBook Air, and this allows it to run apps with ease, and compile code quickly.

        It'll run your programming tools without any issues, and it comes with the Touch Bar across the top of the keyboard, giving you quick access to tools and shortcuts, and can dramatically speed up your workflow.
        
        Perhaps best of all, it comes with an improved keyboard that's not just more reliable than the previous model's keyboard, but is also much more comfortable to work on.
        
        The MacBook Pro 13-inch (M1, 2020) also boasts the longest battery life ever seen in a MacBook. We've tested it ourselves and it's seriously impressive, allowing you to work all day and still have battery life left.`,
        processor: 'M1 Chip',
        memory: '8GB RAM',
        hardrive: '256GB SSD',
        buy_link: 'https://www.amazon.com/dp/B08N5N6RSS?tag=georiot-us-default-20&th=1&psc=1&ascsubtag=cbq-us-1528383070792320800-20&geniuslink=true'
      },
      {
        image_url: "https://i.imgur.com/YrEKnqv.jpg",
        name: 'Microsoft Surface Laptop 4',
        price: '999.99',
        description: `If you're a programmer working on Windows 10 apps in particular, then the Surface Laptop 4 could be the best laptop for you. As it's made by Microsoft, this is a brilliant showcase for Windows 10, so you can be sure your Windows apps run perfectly on the operating system. It'll also likely be one of the first devices to be offered an upgrade to Windows 11 when it launches towards the end of 2021, so if you want to make sure your app runs on that upcoming operating system as well, this could be a great investment.

        While Microsoft is best known as a software company, it's been making some great hardware recently as well, and the Surface Laptop 4 is a great example of this, with a stylish design, a solid aluminium shell and a very comfortable keyboard. 
        
        This new model comes with a choice of new 11th generation Intel Core processors, or AMD's finest mobile CPUs, as well as up to 32 GB and a speedy SSD, which makes this an excellent laptop for even most intense of programming tasks.
        
        Best of all, it has one of the longest battery lives we've seen in a laptop, which allows you to work out and about without worrying about being plugged into a wall socket.`,
        processor: 'AMD Ryzen 5 Microsoft Surface Edition',
        memory: '8GB RAM',
        hardrive: '256 GB SSD',
        buy_link: 'https://www.bestbuy.com/site/microsoft-surface-laptop-4-13-5-touch-screen-amd-ryzen-5-surface-edition-8gb-memory-256gb-ssd-latest-model-platinum/6455189.p?acampID=0&cmp=RMX&irclickid=0vBUxRxWjxyITA6SPQQBEz9fUkBQy-zAKRtoxY0&irgwc=1&loc=Narrativ&mpid=376373&ref=198&skuId=6455189'
      },
      {
        image_url: "https://i.imgur.com/D1UJuPb.jpg",
        name: 'Dell Inspiron 14 5000',
        price: '755.63',
        description: `The Dell Inspiron 14 5000 is a great all-round laptop for programming, and it costs a lot less than many of the laptops on this list, but without skimping on features or performance.

        So, it's got a high resolution Full HD display, a quad-core processor and fast SSD storage, all of which means this is a dependable laptop that will keep up with any of your demands while you're programming.
        
        Sure, it doesn't boast the premium style of its more expensive competitors, but if you're on a tight budget, and you want a laptop that will do everything that you need it to, and you don't care about visual flair or features that you're never going to use in your day-to-day programming, then this is definitely a laptop worth considering.`,
        processor: '8th Gen Intel Quad Core i7-8565U',
        memory: '8GB RAM',
        hardrive: '256GB SSD',
        buy_link: 'https://www.amazon.com/dp/B07X47L4N4?tag=georiot-us-default-20&th=1&psc=1&ascsubtag=cbq-us-9580421261723308000-20&geniuslink=true'
      },
      {
        image_url: "https://i.imgur.com/bLwdOA5.jpg",
        name: 'Lenovo ThinkPad P1 (Gen 2)',
        price: '1559.00',
        description: `If you're after a laptop to take your programming to another level, then the Lenovo ThinkPad P1 is worth considering.

        This seriously powerful workstation laptop offers professional-grade Xeon processors, with up to six cores, an Nvidia Quadro T2000 graphics card and up to 64GB of memory.
        
        You can stuff it with up to 4TB of nVME SSD storage, and opt for a 15.6-inch 4K display that’s not only touch-sensitive but colour-accurate too. It’s a great general-purpose workstation, capable of all kinds of visual design work and heavy lifting processor-intensive tasks. 
        
        Of course, it works great for coding as well. That’s partly thanks to Lenovo’s excellent keyboard design, but in general, the ThinkPad P1 is superbly built, including a semi-rugged chassis that can survive light knocks, and a very healthy selection of ports.
        
        `,
        processor: '9th Gen Intel® Core™ i7 with vPro',
        memory: '16 GB DDR4',
        hardrive: '512 GB PCIe SSD',
        buy_link: 'https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadp/p1-gen-2/22ws2wpp102'
      },
      {
        image_url: "https://i.imgur.com/G7BQ8wd.jpg",
        name: 'HP Envy 13',
        price: '619.99',
        description: `The new HP Envy 13 is a great pick for programmers looking for a stylish yet dependable laptop to work on. 

        HP recently made big changes to this popular 13-inch laptop by reducing the size and weight. Coupled with a high-quality touch-sensitive display, it’s both powerful and super portable. It's also overhauled the body of the laptop, giving it a luxurious all-metal design that gives this laptop a beautiful premium look and feel, while also protecting it from knocks and bumps. It certainly earns the ‘Envy’ moniker - use this in an office and you'll be getting appreciative glances from your co-workers.
        
        The keyboard has plenty of travel, with page up and down keys, and the trackpad is large enough to be extremely comfortable – both critical aspects of a laptop for long coding sessions.
        
        `,
        processor: 'Intel® Core™ i5-1135G7',
        memory: '8 GB',
        hardrive: '256 GB',
        buy_link: 'https://www.hp.com/us-en/shop/ConfigureView?langId=-1&storeId=10151&catEntryId=3074457345619767818&configId=1F5L3AV_100019&source=aw&subacctid=103504&subacctname=Future+Publishing.&adcampaigngroup=91539&awc=7168_1631318906_d2b1a2f183c85862920859a50172fe54&jumpid=af_gen_nc_ns&utm_medium=af&utm_source=aw&utm_campaign=Future+Publishing.'
      }
      // {
      //   image_url: "",
      //   name: 'Google Pixelbook Go',
      //   price: '$649',
      //   description: `For Android developers, a Chromebook might seem a natural choice for the best possible integration with Google’s software and services, with full support for running Android software natively. However, many Chromebooks are designed to be highly affordable, with lower-spec features and performance suffering to bring the price down.

      //   The Pixelbook Go is an upgrade from more basic models, designed to compete with the bigger laptop manufacturers. It still runs ChromeOS, which supports Google’s Android Studio development tools, but the hardware is right up there with a standard Windows laptop. You can also run Linux apps as well.
        
      //   The Pixelbook Go is certainly the best Chromebook ever made. It packs some impressive hardware, including an Intel Core i7 processor, a choice of 8GB or 16GB RAM and a large and vibrant 1,920 x 1,080 screen or 4K touch screen if you really want to show off.
        
      //   This all makes it a fantastic laptop for programming on, with performance that matches most Windows 10 laptops, but with an incredibly long-lasting battery that means the Pixelbook Go will keep on going even after many Windows 10 laptops give up the ghost.`,
      //   processor: 'Intel Core m3',
      //   memory: '8GB',
      //   hardrive: '64GB',
      //   buy_link: 'https://www.bestbuy.com/site/google-pixelbook-go-13-3-touch-screen-chromebook-intel-core-m3-8gb-memory-64gb-solid-state-drive-just-black/6382912.p?acampID=0&cmp=RMX&irclickid=0vBUxRxWjxyITA6SPQQBEz9fUkBQUxwwKRtoxY0&irgwc=1&loc=Narrativ&mpid=376373&ref=198&skuId=6382912'
      // },
    ]

  await Laptop.insertMany(laptops)
  console.log("Created laptops!")

  // close database connection. done.
  db.close()
}

insertData()